/* eslint-disable no-mixed-spaces-and-tabs */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Project, { ProjectI } from "./Project";
import Skeleton from "./Skeleton";

const Work = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [entryAnimation, setEntryAnimation] = useState({});

	useEffect(() => {
		if (isInView) {
			setEntryAnimation({ opacity: 1, translateY: 0 });
		}
	}, [isInView]);

	const projects = useQuery(["projects"], () =>
		axios.get("https://strapi.bartlomiejtutak.com/projects")
	);

	return (
		<>
			<div id="work"></div>
			<motion.section
				className="w-full max-w-full flex flex-col gap-16 px-8 py-32 duration-500 translate-y-1/3"
				animate={entryAnimation}
			>
				<h2 className="text-4xl text-center flex justify-center" ref={ref}>
					<span className="w-max relative after:absolute after:top-[110%] after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']">
						My projects
					</span>
				</h2>
				<p className="text-center text-xl whitespace-pre-line 2xl:whitespace-normal">
					Here you will find some of my personal projects that I created. {"\n"}{" "}
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-8 md:px-16">
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
				</div>
			</motion.section>
		</>
	);
};
export default Work;
