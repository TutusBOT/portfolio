/* eslint-disable no-mixed-spaces-and-tabs */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "./Link/Link";

const About = () => {
	const skills = useQuery(["skills"], () =>
		axios.get("http://192.168.1.10:1338/skills")
	);

	return (
		<section
			id="about"
			className="flex flex-col items-center gap-16 pb-16 px-8"
		>
			<h2 className="w-max text-4xl text-center relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']">
				About me
			</h2>
			<div className="grid grid-cols-2 gap-32">
				<div className="flex flex-col gap-6 max-w-lg">
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
					<Link text="CONTACT" url="#contact" className="max-w-[200px]" />
				</div>
				<div className="max-w-lg flex flex-col gap-6">
					<h3 className="text-2xl">My skills</h3>
					<ul className="max-w-full flex flex-wrap gap-2">
						{skills.data
							? skills.data.data.skills.map((skill: string) => {
									return (
										<li
											key={skill}
											className="bg-black-light px-4 py-2 text-lg w-max"
										>
											{skill}
										</li>
									);
							  })
							: null}
					</ul>
				</div>
			</div>
		</section>
	);
};
export default About;
