import React from "react";

const Contact = () => {
	return (
		<form action='#' className='px-6 md:px-0 max-w-md mx-auto space-y-4 mt-8'>
			<div>
				<label className='text-lg text-gray-700 dark:text-gray-400' for='name'>
					Name
				</label>
				<input
					type='text'
					name='name'
					id='name'
					className='block w-full dark:text-white dark:bg-gray-800 dark:focus:bg-gray-700 mt-1 py-2 px-3 ring-2 dark:ring-0 ring-gray-200 transition duration-300 focus:outline-none focus:ring-cyan-500 rounded'
				/>
			</div>
			<div>
				<label className='text-lg text-gray-700 dark:text-gray-400' for='email'>
					Email
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className='block w-full dark:text-white dark:bg-gray-800 dark:focus:bg-gray-700 mt-1 py-2 px-3 ring-2 dark:ring-0 ring-gray-200 transition duration-300 focus:outline-none focus:ring-cyan-500 rounded'
				/>
			</div>
			<div>
				<label
					className='text-lg text-gray-700 dark:text-gray-400'
					for='message'>
					Message
				</label>
				<textarea
					name='message'
					id='message'
					className='block w-full dark:text-white dark:bg-gray-800 dark:focus:bg-gray-700 mt-1 py-2 px-3 ring-2 dark:ring-0 ring-gray-200 transition duration-300 focus:outline-none focus:ring-cyan-500 rounded'
					rows='5'></textarea>
			</div>
			<button className='whitespace-nowrap block font-inter bg-gradient-to-r from-cyan-500 to-sky-500 hover:bg-gradient-to-l focus:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 text-cyan-100 py-1.5 px-6 mx-auto rounded font-medium transition-colors duration-300'>
				Submit
			</button>
		</form>
	);
};

export default Contact;
