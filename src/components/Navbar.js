import React from "react";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = React.useState(false);
	const toggleDarkMode = () => {
		let htmlElement = document.getElementsByTagName("html")[0];
		console.log("HTML", htmlElement);
		htmlElement.classList.add(isDarkMode ? "light" : "dark");
		htmlElement.classList.remove(isDarkMode ? "dark" : "light");
		setIsDarkMode((curr) => !curr);
	};

	return (
		<nav className='sticky top-0 z-10 h-20 bg-white dark:bg-gray-900 border-b dark:border-b-gray-700'>
			<div className='h-full flex max-w-screen-lg mx-auto items-center justify-between px-5'>
				<div className='flex items-center justify-center h-12 w-12 text-cyan-500 rounded-full border-2 border-cyan-500 font-poppins font-bold'>
					A
				</div>
				<div className='menu group'>
					{/* <!-- Menu Button --> */}
					<button className='md:hidden align-middle'>
						<CgMenu size={30} className='dark:text-white' />
					</button>

					{/* <!-- Menu Items --> */}
					<div className='menu__items absolute md:static md:group-focus-within:shadow-none flex flex-col md:items-center md:flex-row font-space left-0 top-0 bg-white dark:bg-gray-800 md:dark:bg-gray-900 shadow-2xl md:shadow-none h-screen md:h-auto w-80 md:w-auto p-6 md:p-0 space-y-2 md:space-y-0 md:space-x-3 -translate-x-full md:translate-x-0 transition-transform duration-0'>
						<a
							href='#about'
							className='hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-300 rounded py-3 md:py-2 px-5 transition-colors duration-300'>
							About
						</a>
						<a
							href='#projects'
							className='hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-300 rounded py-3 md:py-2 px-5 transition-colors duration-300'>
							Projects
						</a>
						<a
							href='#skills'
							className='hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-300 rounded py-3 md:py-2 px-5 transition-colors duration-300'>
							Skills
						</a>
						<a
							href='#contact'
							className='hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-300 rounded py-3 md:py-2 px-5 transition-colors duration-300'>
							Contact
						</a>
						<button
							className='relative hidden md:block h-8 w-14 bg-gray-200 dark:bg-gray-700  p-1.5 rounded-full'
							onClick={toggleDarkMode}>
							<div
								className={`h-full w-5 rounded-full transform transition duration-300 ${
									isDarkMode
										? "translate-x-6 bg-blue-500"
										: "bg-gray-400 translate-x-0"
								}`}></div>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
