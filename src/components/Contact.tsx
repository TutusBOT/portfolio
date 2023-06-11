import Button from "./Button";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import SnackBar from "./SnackBar";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [emailError, setEmailError] = useState<null | string>(null);

	const form = useRef(null);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.current) return;
		emailjs
			.sendForm(
				"service_5ggawdv",
				"template_n7w2cge",
				form.current,
				import.meta.env.VITE_EMAILJS
			)
			.then(
				(result) => {
					console.log(result);
					setShowConfirmation(true);
					setEmail("");
					setName("");
					setMessage("");
					setEmailError(null);
				},
				(error) => {
					console.log(error.text);
					setEmailError(error.text);
				}
			);
	};

	return (
		<section
			className="bg-[#f5f5f5] py-8 px-2 flex flex-col items-center gap-8"
			id="contact"
		>
			<h2 className="text-black text-4xl text-center w-max relative after:absolute after:top-full after:left-0 after:w-full after:h-1 after:bg-purple after:content-['']">
				Let&#39;s get in touch
			</h2>
			<form
				ref={form}
				className="flex flex-col px-4 sm:px-8 py-4 sm:py-8 items-center w-full max-w-3xl gap-4 bg-black-light shadow-2xl"
				onSubmit={handleSubmit}
			>
				<Input
					label="Your Name"
					id="name"
					name="user_name"
					required
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<Input
					type="email"
					label="Your Email"
					id="email"
					name="user_email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div className="flex flex-col max-w-3xl w-full">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						rows={5}
						className="outline-none resize-y bg-transparent border-white border-2 text-lg p-2 w-full"
						name="message"
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<Button
					className="self-end hover:bg-purple transition-colors"
					type="submit"
				>
					SEND
				</Button>
			</form>
			{showConfirmation && (
				<SnackBar
					message="Thank you for your message!"
					autoHideDuration={6000}
				/>
			)}
			{emailError && <SnackBar message={emailError} autoHideDuration={6000} />}
		</section>
	);
};
export default Contact;
