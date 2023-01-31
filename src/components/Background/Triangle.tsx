import "./triangle.css";

const Triangle = () => {
	return (
		<svg className="triangle-container">
			<pattern height="1920" width="1080" patternUnits="userSpaceOnUse">
				<polygon
					points="250,60 100,300 400,300"
					className="triangle fill-transparent stroke-white"
				/>
				Sorry, your browser does not support inline SVG.
			</pattern>
		</svg>
	);
};
export default Triangle;
