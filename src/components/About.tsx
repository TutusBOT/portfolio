/* eslint-disable no-mixed-spaces-and-tabs */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "./Link/Link";
import Skeleton from "./Skeleton";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [entryAnimation, setEntryAnimation] = useState({});

	useEffect(() => {
		if (isInView) {
			setEntryAnimation({ opacity: 1, translateY: 0 });
		}
	}, [isInView]);

	const about = useQuery(["about"], () =>
		axios.get("https://strapi.bartlomiejtutak.com/about")
	);

	return (
		<motion.section
			id="about"
			className="flex flex-col items-center gap-16 py-24 px-8 opacity-0 duration-500 translate-y-1/3"
			animate={entryAnimation}
		>
			<h2
				className="w-max text-4xl text-center relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']"
				ref={ref}
			>
				About me
			</h2>
			<p className="text-xl -mt-8 text-center">
				{about.data ? (
					about.data.data.short_description
				) : (
					<Skeleton className="w-[50ch] h-5" />
				)}
			</p>
			<div className="grid md:grid-cols-2 gap-32">
				<div className="flex flex-col gap-6 md:max-w-lg">
					<h3 className="text-2xl">Get to know me</h3>
					<p>
						I&#39;m a <strong>Web Developer</strong> that can bring life to your
						project with <span className="text-purple-light">&lt;code&gt;</span>{" "}
						and <i>passion</i>.
					</p>
					<p>
						I&#39;m open to <strong>job</strong> opportunities where I can
						constantly learn and grow. If my skills match your expectations
						don&#39;t hesitate to <strong>contact</strong> me.
					</p>
					<Link
						text="CONTACT"
						url="#contact"
						className="max-w-[200px]"
						target="_self"
					/>
				</div>
				<div className="md:max-w-lg flex flex-col gap-6">
					<h3 className="text-2xl">My skills</h3>
					<ul className="max-w-full flex flex-wrap gap-3">
						{about.data ? (
							about.data.data.skills.map((skill: string) => {
								return (
									<li
										key={skill}
										className="bg-black-light px-4 py-2 text-sm lg:text-lg w-max"
									>
										{skill}
									</li>
								);
							})
						) : (
							<>
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
								<Skeleton className="h-8 w-20" />
							</>
						)}
					</ul>
				</div>
			</div>
		</motion.section>
	);
};
export default About;
