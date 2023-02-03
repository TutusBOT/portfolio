interface Skeleton {
	className?: string;
}

const Skeleton = ({ className }: Skeleton) => {
	return <div className={`${className} animate-pulse bg-gray-400`}></div>;
};
export default Skeleton;
