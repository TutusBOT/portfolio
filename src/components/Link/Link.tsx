import "./shine.css";

interface Link {
	url: string;
	text: string;
	className?: string;
}

const Link = ({ url, text, className }: Link) => {
	return (
		<a
			className={`shine text-md border-white border-2 py-2 px-6 hover:text-purple hover:border-purple transition-colors min-w-[120px] text-center ${className}`}
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			{text}
		</a>
	);
};
export default Link;
