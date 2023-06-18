/* eslint-disable no-mixed-spaces-and-tabs */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Project, { ProjectI } from "./Project";
import Skeleton from "./Skeleton";

const Work = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const shortDescriptionControls = useAnimation();
	const projectsControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			shortDescriptionControls.start("visible");
			projectsControls.start("inView");
		}
	}, [isInView]);

	const projects = useQuery(["projects"], () =>
		axios.get("https://strapi.bartlomiejtutak.com/projects")
	);

	return (
		<>
			<section
				className="w-full max-w-full flex flex-col gap-16 px-8 py-32 duration-500"
				id="work"
			>
				<h2 className="text-4xl text-center flex justify-center" ref={ref}>
					<span className="w-max relative after:absolute after:top-[110%] after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']">
						My projects
					</span>
				</h2>
				<p className="relative w-fit text-center text-xl whitespace-pre-line 2xl:whitespace-normal self-center">
					Here you will find some of my personal projects that I created. {"\n"}{" "}
					<motion.div
						className="absolute top-0 left-0 h-full bg-purple"
						variants={{
							hidden: { width: "100%" },
							visible: { width: "0%" },
						}}
						initial="hidden"
						animate={shortDescriptionControls}
						transition={{ duration: 0.5, delay: 0.25 }}
					></motion.div>
				</p>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-8 md:px-16"
					variants={{
						outOfView: { opacity: 0, y: "20%" },
						inView: { opacity: 1, y: "0%" },
					}}
					initial="outOfView"
					animate={projectsControls}
					transition={{ duration: 0.5, delay: 0.25 }}
				>
					{projects.data ? (
						projects.data.data
							.sort((a: ProjectI, b: ProjectI) => a.importance - b.importance)
							.map((project: ProjectI) => {
								return (
									<Project
										key={project.id}
										description={project.description}
										image={project.image}
										title={project.title}
										technologies={project.technologies}
										github={project.github}
										live={project.live}
										id={project.id}
										importance={project.importance}
									/>
								);
							})
					) : (
						<Skeleton className="w-[300px] md:w-[450px] max-w-md h-[450px]" />
					)}
				</motion.div>
			</section>
		</>
	);
};
export default Work;
