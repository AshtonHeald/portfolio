import { useState, useEffect } from "react";

const Navigation = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggle = () => {
		setIsChecked((prev) => !prev);
	};

	useEffect(() => {
		if (isChecked) {
			document.body.classList.add("disable-scroll");
		} else {
			document.body.classList.remove("disable-scroll");
		}

		return () => {
			document.body.classList.remove("disable-scroll");
		};
	}, [isChecked]);

	useEffect(() => {
		const handleItemClick = () => {
			toggle();
		};

		const handleResize = () => {
			if (window.innerWidth <= 1023) {
				const elements = document.getElementsByClassName("nav-item");
				for (let i = 0; i < elements.length; i++) {
					elements[i].addEventListener("click", handleItemClick);
				}
			} else {
				const elements = document.getElementsByClassName("nav-item");
				for (let i = 0; i < elements.length; i++) {
					elements[i].removeEventListener("click", handleItemClick);
				}
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div
				id="navigation"
				className="bg-base-100 h-12 fixed w-full xl:block xl:h-[620px] xl:text-center xl:w-64 xl:bottom-[-53px] xl:mt-auto xl:mb-auto xl:top-0 xl:rounded-bl-2xl z-10"
			>
				<NavBar isChecked={isChecked} toggle={toggle} />
				<div
					id="toggle"
					className="z-10 relative bg-base-100 hidden h-[calc(100vh-48px)] xl:flex xl:flex-col xl:h-full xl:border-base-300 xl:border-r xl:rounded-bl-2xl"
				>
					<NavHeader />
					<NavMenu />
					<NavFooter />
				</div>
			</div>
		</>
	);
};

export default Navigation;

const NavBar = ({ isChecked, toggle }) => {
	return (
		<>
			<a
				href="https://ashthe.dev"
				id="logo"
				className="text-xl font-bold absolute my-[10px] ml-4 md:ml-8 hover:text-pink-300 xl:hidden"
				aria-label="Reload Ash The Dev"
			>
				AshTheDev
			</a>
			<input
				type="checkbox"
				name="thing"
				value="valuable"
				id="menu-toggle"
				checked={isChecked}
				onChange={toggle}
			/>
			<label
				htmlFor="menu-toggle"
				id="menu-toggle-btn"
				className="block my-1 mr-2 md:mr-6 ml-auto p-2 w-10 hover:cursor-pointer xl:hidden"
			>
				{isChecked ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18 18 6M6 6l12 12"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				)}
			</label>
		</>
	);
};

const NavHeader = () => {
	return (
		<div id="nav-header" className="flex flex-col text-center">
			<a
				href="https://ashthe.dev"
				id="avatar"
				className="mt-8 mb-4 mx-auto bg-[url('/ash-happy.png')] hover:bg-[url('/ash-smile.png')] bg-[length:123px_115px] bg-center w-28 h-28 rounded-full border-[5px] border-base-300 hover:border-primary transition-all"
			></a>
			<span className="font-bold">Front-End Developer</span>
			<a
				className="link link-primary link-hover border-b border-base-300 mx-auto mb-2 pt-0.5 px-auto pb-2.5 text-center w-40"
				href="https://www.linkedin.com/in/ashtonheald/"
				id="status"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>@ Looking for Work</span>
			</a>
		</div>
	);
};

const NavMenu = () => {
	return (
		<nav className="h-full">
			<ul className="flex flex-col h-full">
				<NavItem text="About" href="/about" />
				<NavItem text="Skills" href="/skills" />
				<NavItem text="Projects" href="/projects" />
				<NavItem text="Contact" href="/contact" />
			</ul>
		</nav>
	);
};

const NavItem = ({ text, href }) => {
	return (
		<li className="links">
			<a
				className="nav-item block my-0 mx-auto p-2.5 text-center w-40 hover:text-primary focus:text-primary"
				href={href}
			>
				{text}
			</a>
		</li>
	);
};

const NavFooter = () => {
	return (
		<div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mt-auto p-3 gap-1">
			<span>Made with</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className="w-[16px] h-[16px]"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
				/>
			</svg>
		</div>
	);
};
