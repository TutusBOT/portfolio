/* eslint-disable no-mixed-spaces-and-tabs */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Project, { ProjectI } from "./Project";

const Work = () => {
	const projects = useQuery(["projects"], () =>
		axios.get("http://192.168.1.10:1338/projects")
	);

	return (
		<section className="w-full max-w-full flex flex-col gap-16" id="work">
			<h2 className="text-4xl text-center flex justify-center px-4">
				<span className="w-max relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']">
					My projects
				</span>
			</h2>
			<p className="text-center text-xl">
				Here you will find some of my personal projects that I created. Each one
				of them is self-hosted on Linux using Docker.
			</p>
			<div className="grid items-center justify-center md:px-16">
				{projects.data
					? projects.data.data.map((project: ProjectI) => {
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
								/>
							);
					  })
					: null}
			</div>
		</section>
	);
};
export default Work;
