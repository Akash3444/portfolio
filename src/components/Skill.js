import React from "react";

const Skill = ({ title, skills, design }) => {
	return (
		<div
			className='relative w-full dark:bg-gray-800 max-w-xs mx-auto pt-6 pb-14 px-6 rounded-lg overflow-hidden'
			style={{ boxShadow: "0px 2px 4px 1px #00000040" }}>
			<h4 className='relative dark:text-white text-2xl font-bold font-poppins text-center'>
				{title}
			</h4>
			<ul className='text-center flex-1 dark:text-gray-300 font-inter text-lg mt-3'>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
			{design}
		</div>
	);
};

export default Skill;
