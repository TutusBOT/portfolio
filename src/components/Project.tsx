import Link from "./Link/Link";

export interface ProjectI {
	title: string;
	image: { url: string };
	technologies: string[];
	description: string;
	github: string;
	live: string;
	importance: number;
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
		<div className="bg-black-light py-6 h-full w-[300px] md:w-full max-w-2xl px-4 border-white flex flex-col justify-between gap-4 shadow-lg">
			<h3 className="text-2xl">{title}</h3>
			<a
				className="max-w-full overflow-hidden"
				href={live}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={`https://strapi.bartlomiejtutak.com${image.url}`}
					alt={title}
					className="max-w-full scale-100 duration-500 ease-in-out hover:scale-110"
				/>
			</a>
			<ul className="flex flex-wrap font-bold text-purple">
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
