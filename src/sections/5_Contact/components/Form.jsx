import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput";

const Form = () => {
	const form = useRef();
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const sendEmail = e => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");

		emailjs.sendForm("contact_service", "portfolio_form", form.current, "00pWDI9dvQcw8kiAg").then(
			result => {
				console.log(result.text);
				setSuccessMessage("Message Sent Successfully!");
				form.current.reset();
			},
			error => {
				setErrorMessage("Unable to send message.");
				console.log(error.text);
			}
		);
	};

	return (
		<form method="POST" className="px-5 pt-5 pb-6 mt-2.5 mb-3 bg-neutral-700 rounded-xl shadow-md" ref={form} onSubmit={sendEmail}>
			<div className="md:flex">
				<div className="md:w-6/12 md:mr-2.5">
					<FormInput isInput={true} type="text" id="name" placeholder="John Doe" label="Name" />
					<FormInput isInput={true} type="text" id="email" placeholder="name@example.com" label="Email" />
					<FormInput isInput={true} type="text" id="subject" placeholder="Reason for contact" label="Subject" />
				</div>
				<div className="md:w-6/12 md:ml-2.5">
					<FormInput isInput={false}  className="h-[168px]" id="message" placeholder="Type message here.." label="Message" />
				</div>
			</div>
			<input className="mx-auto mt-2.5 p-2 rounded-full bg-cyan-300 h-12 text-center text-neutral-950 font-semibold grid place-items-center w-[49%] sm:w-48 cursor-pointer" type="submit" value="Send" />
			<div className="text-center text-rose-600" id="error-message">
				{errorMessage}
			</div>
			<div className="text-center text-lime-400" id="success-message">
				{successMessage}
			</div>
		</form>
	);
};

export default Form;
