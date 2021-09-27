import React from "react";
import { FiGithub } from "react-icons/fi";
import { CgEye } from "react-icons/cg";

const Project = ({ id, title, description, links, skills }) => {
	return (
		<div className=' w-full max-w-md mx-auto '>
			<div className='group relative rounded-lg overflow-hidden shadow-md'>
				{/* Image */}
				<div className='aspect-w-16 aspect-h-10 sm:aspect-h-9'>
					<img
						src={`/project-${id}.png`}
						alt='Project'
						className='block max-w-full object-cover'
					/>
				</div>

				{/* Project Info - hover */}
				<div className='absolute inset-0 flex flex-col items-center h-full w-full bg-gradient-to-br from-cyan-400/90 to-sky-500/90 text-white p-6 scale-y-0 group-hover:scale-y-100 origin-top delay-700 group-hover:delay-75 group-hover:origin-bottom transition-transform duration-300'>
					<h1 className='text-3xl font-bold font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300'>
						{title}
					</h1>
					<p className='line-clamp-5 lg:line-clamp-4 font-inter mt-3 text-cyan-50 text-center transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500'>
						{description}
					</p>
					<div className='flex mt-4 space-x-4'>
						<a
							href={links.source}
							target='_blank'
							rel='noreferrer'
							className='h-10 w-10 bg-white rounded-full grid place-items-center transform -translate-x-6 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500'>
							<FiGithub size={21} className='text-cyan-500' />
						</a>
						<a
							href={links.main}
							target='_blank'
							rel='noreferrer'
							className='h-10 w-10 bg-white rounded-full grid place-items-center transform translate-x-6 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500'>
							<CgEye size={22} className='text-cyan-500' />
						</a>
					</div>
				</div>
			</div>

			{/* Tech Stack */}
			<div className='flex mt-2 py-2 space-x-3 rounded-tl mx-auto'>
				{skills.map((Skill) => (
					<Skill className='text-gray-500 dark:text-white' size={22} />
				))}
			</div>
		</div>
	);
};

export default Project;
