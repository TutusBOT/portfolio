interface Skeleton {
	className?: string;
}

const Skeleton = ({ className }: Skeleton) => {
	return <div className={`${className} animate-pulse bg-neutral-800`}></div>;
};
export default Skeleton;
