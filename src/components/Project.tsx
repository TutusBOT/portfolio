import Link from "./Link/Link";

export interface ProjectI {
	title: string;
	image: { url: string };
	technologies: string[];
	description: string;
	github: string;
	live: string;
	id: number;
}

const Project = ({
	title,
	image,
	technologies,
	description,
	github,
	live,
}: ProjectI) => {
	return (
		<div className="bg-black-light py-6 w-[300px] md:w-full max-w-md px-4 border-white flex flex-col gap-4 shadow-lg">
			<h3 className="text-2xl">{title}</h3>
			<a
				className="max-w-full overflow-hidden"
				href={live}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={`http://192.168.1.10:1338${image.url}`}
					alt={title}
					className="max-w-full scale-100 duration-500 ease-in-out hover:scale-110"
				/>
			</a>
			<ul className="flex font-bold text-purple">
				{technologies.map((technology, i) => {
					return (
						<li key={i} className="flex items-center">
							{i > 0 && (
								<div className="w-[4px] h-[4px] bg-purple rounded-full mx-2"></div>
							)}
							{technology}
						</li>
					);
				})}
			</ul>
			<p className="text-sm">{description}</p>
			<div className="flex justify-between gap-4">
				<Link text="LIVE" url={live} className="w-full" />
				<Link text="CODE" url={github} className="w-full" />
			</div>
		</div>
	);
};
export default Project;
