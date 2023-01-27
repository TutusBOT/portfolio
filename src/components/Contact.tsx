import Button from "./Button";
import Input from "./Input";

const Contact = () => {
	return (
		<section
			className="bg-purple relative pb-8 flex flex-col items-center gap-8"
			id="contact"
		>
			<div className="absolute w-0 h-0 border-t-black border-x-transparent border-b-transparent border-t-[100px] border-r-[100vw] border-l-0 border-b-0"></div>
			<h2 className="text-white text-4xl text-center mt-[120px] w-max relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-black after:content-['']">
				Let&#39;s get in touch
			</h2>
			<div className="grid grid-cols-2">
				<div>bartlomiej.tutak0@gmail.com</div>
				<form action="return" className="flex flex-col px-8 items-center">
					<div className="flex">
						<div className="flex flex-col">
							<Input label="Full Name" id="name" />
						</div>
						<div className="flex flex-col">
							<Input type="email" label="Email" id="email"></Input>
						</div>
					</div>
					<label htmlFor="message" className="text-xl">
						Message
					</label>
					<textarea
						id="message"
						rows={3}
						className="outline-none resize-y bg-transparent border-black border-2 text-xl p-2 w-[720px]"
					></textarea>
					<Button>SEND</Button>
				</form>
			</div>
		</section>
	);
};
export default Contact;
