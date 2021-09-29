import React from "react";

const Hero = () => {
	return (
		<div className='py-10 px-5 space-y-5' id='about'>
			<p className='bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-900 fill-current text-transparent font-medium font-space text-lg max-w-md mx-auto'>
				My name is
			</p>

			<div className='font-poppins text-4xl font-bold text-center'>
				<h1 className='text-gray-900 dark:text-gray-100'>Akash Moradiya</h1>
				<h1 className='text-gray-700 dark:text-gray-400 mt-2'>Web Developer</h1>
			</div>

			<img
				src='/avatar.svg'
				height='200'
				width='200'
				className='mx-auto'
				alt='Coding'
			/>

			<p className='w-full max-w-md text-gray-700 dark:text-gray-300 font-inter text-xl mx-auto leading-8 text-center'>
				I'm a{" "}
				<span className='underline-cyan-500'>full-stack web developer</span>{" "}
				specializing in building web applications using{" "}
				<span className='underline-cyan-500'>MERN stack</span>.
			</p>
			<a
				href='#contact'
				className='block w-full max-w-max text-cyan-600 hover:bg-cyan-500/20 font-mono mx-auto py-2 px-5 rounded border border-cyan-600 focus:outline-none'>
				Talk With Me
			</a>
		</div>
	);
};

export default Hero;
