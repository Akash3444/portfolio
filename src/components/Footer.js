import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-gray-900 mt-10 py-10 px-6 space-y-6 border-t dark:border-gray-700'>
			<div className='flex items-center justify-center h-14 w-14 text-cyan-400 mx-auto rounded-full border-2 border-cyan-400 font-poppins font-bold'>
				A
			</div>
			<div className='flex items-center justify-center space-x-4'>
				{/* <!-- FB --> */}
				<a
					href='https://github.com/Akash3444'
					target='_blank'
					rel='noreferrer'
					className='cursor-pointer flex items-center justify-center bg-white/10 hover:bg-white/20 h-10 w-10 rounded transition-colors duration-300'>
					<FaGithub size={20} className='text-white' />
				</a>
				{/* <!-- FB --> */}
				<a
					href='https://www.linkedin.com/in/akash-3444/'
					target='_blank'
					rel='noreferrer'
					className='cursor-pointer flex items-center justify-center bg-white/10 hover:bg-white/20 h-10 w-10 rounded transition-colors duration-300'>
					<FaLinkedinIn size={20} className='text-white' />
				</a>
			</div>
			<p className='text-gray-400 text-center font-inter'>
				Designed and built by <span className='text-white'>Akash Moradiya</span>
			</p>
		</footer>
	);
};

export default Footer;
