import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
	const form = useRef();
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");

		emailjs
			.sendForm(
				"contact_service",
				"portfolio_form",
				form.current,
				"00pWDI9dvQcw8kiAg"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccessMessage("Message Sent Successfully!");
					form.current.reset();
				},
				(error) => {
					setErrorMessage("Unable to send message.");
					console.log(error.text);
				}
			);
	};
	return (
    <>
    
		<form action="">
			<div className="flex flex-col gap-3">
				<div className="grid gap-3">
					<input
						type="text"
						placeholder="Name"
						className="input input-bordered w-full"
					/>
					<input
						type="email"
						placeholder="Email"
						className="input input-bordered w-full"
					/>
					<input
						type="text"
						placeholder="Subject"
						className="input input-bordered w-full"
					/>
				</div>
				<div className="">
					<textarea
						className="textarea h-full textarea-bordered textarea-md text-base w-full"
						placeholder="Message"
						rows={5}
					></textarea>
				</div>
			</div>
			<div className="card-actions justify-end">
				<button
					className="btn btn-primary gap-0.5 mx-auto mt-3"
					type="submit"
				>
					Send
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
						></path>
					</svg>
				</button>
			</div>
		</form>
    </>
	);
};

export default Form;
