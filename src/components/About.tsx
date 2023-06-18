/* eslint-disable no-mixed-spaces-and-tabs */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
	useInView,
	useScroll,
	useTransform,
	motion,
	useAnimation,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "./Link/Link";
import Skeleton from "./Skeleton";

const About = () => {
	const ref = useRef(null);
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["end", "start"],
	});
	const opacity = useTransform(scrollYProgress, [1, 0.05, 0], [1, 1, 0]);
	const scale = useTransform(scrollYProgress, [1, 0.05, 0], [1, 1, 0.8]);

	const xDescription = useTransform(scrollYProgress, [1, 0.8], ["-50%", "0%"]);
	const scaleDescription = useTransform(scrollYProgress, [1, 0.8], [0.6, 1]);
	const opacityDescription = useTransform(scrollYProgress, [1, 0.8], [0, 1]);

	const xSkills = useTransform(scrollYProgress, [1, 0.8], ["50%", "0%"]);
	const scaleSkills = useTransform(scrollYProgress, [1, 0.8], [0.6, 1]);
	const opacitySkills = useTransform(scrollYProgress, [1, 0.8], [0, 1]);

	const isInView = useInView(ref, { once: true });
	const shortDescriptionControls = useAnimation();
	const headingControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			shortDescriptionControls.start("visible");
			headingControls.start("visible");
		}
	}, [isInView]);

	const about = useQuery(["about"], () =>
		axios.get("https://strapi.bartlomiejtutak.com/about")
	);

	return (
		<>
			<motion.section
				className="relative  py-32 px-8 opacity-0 duration-500 min-h-[150vh]"
				ref={sectionRef}
				style={{ opacity, scale }}
			>
				<div id="about" className="absolute top-0 sm:top-[20%]"></div>
				<div className="sticky flex flex-col items-center gap-16 overflow-hidden top-1/4">
					<motion.h2
						className="w-max text-4xl text-center relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']"
						ref={ref}
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
						initial="hidden"
						animate={headingControls}
						transition={{ duration: 0.5, delay: 0.25 }}
					>
						About me
					</motion.h2>
					<div className="relative -mt-8 text-xl text-center">
						{about.data ? (
							about.data.data.short_description
						) : (
							<Skeleton className="w-[50ch] h-5" />
						)}
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
					</div>
					<div className="relative grid gap-16 md:grid-cols-2 lg:gap-32">
						<motion.div
							className="z-10 flex flex-col gap-6 md:max-w-lg"
							style={{
								x: xDescription,
								scale: scaleDescription,
								opacity: opacityDescription,
							}}
						>
							<h3 className="text-2xl">Get to know me</h3>
							<p>
								I&#39;m a <strong>Web Developer</strong> that can bring life to
								your project with{" "}
								<span className="text-purple-light">&lt;code&gt;</span> and{" "}
								<i>passion</i>.
							</p>
							<p>
								I&#39;m open to <strong>job</strong> opportunities where I can
								constantly learn and grow. If my skills match your expectations
								don&#39;t hesitate to <strong>contact</strong> me.
							</p>
							<p>In my spare time, I enjoy playing computer games and chess.</p>
							<Link
								text="CONTACT"
								url="#contact"
								className="max-w-[200px]"
								target="_self"
							/>
						</motion.div>
						<motion.div
							className="flex flex-col gap-6 md:max-w-lg"
							style={{
								x: xSkills,
								scale: scaleSkills,
								opacity: opacitySkills,
							}}
						>
							<h3 className="text-2xl">This is what I specialize in</h3>
							<div className="flex flex-row gap-6 lg:gap-8">
								{about.data?.data.main_skills.map(
									(image: {
										id: string;
										url: string;
										alternativeText?: string;
									}) => (
										<img
											key={image.id}
											src={`https://strapi.bartlomiejtutak.com${image.url}`}
											className="max-w-[75px] sm:max-w-[100px] w-1/3 object-contain"
											alt={image.alternativeText}
										/>
									)
								)}
							</div>
							<h4 className="mt-8 text-xl">I also worked with </h4>
							<ul className="flex flex-wrap max-w-full gap-3">
								{about.data ? (
									about.data.data.skills.map((skill: string) => {
										return (
											<li
												key={skill}
												className="px-4 py-2 text-sm bg-black-light lg:text-lg w-max"
											>
												{skill}
											</li>
										);
									})
								) : (
									<>
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
										<Skeleton className="w-20 h-8" />
									</>
								)}
							</ul>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</>
	);
};
export default About;
