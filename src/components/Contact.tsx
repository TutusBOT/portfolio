import Button from "./Button";
import Input from "./Input";

const Contact = () => {
	return (
		<section
			className="bg-[#f5f5f5] py-8 px-2 flex flex-col items-center gap-8"
			id="contact"
		>
			<h2 className="text-black text-4xl text-center w-max relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']">
				Let&#39;s get in touch
			</h2>
			<form
				action="return"
				className="flex flex-col px-4 sm:px-8 py-4 sm:py-8 items-center w-full max-w-3xl gap-4 bg-black-light shadow-2xl"
			>
				<Input label="Full Name" id="name" />
				<Input type="email" label="Email" id="email"></Input>
				<div className="flex flex-col max-w-3xl w-full">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						rows={5}
						className="outline-none resize-y bg-transparent border-white border-2 text-lg p-2 w-full"
					></textarea>
				</div>
				<Button className="self-end">SEND</Button>
			</form>
		</section>
	);
};
export default Contact;
