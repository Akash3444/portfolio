import React from "react";
import Skill from "./Skill";
import Frontend from "./designs/Frontend";
import Backend from "./designs/Backend";
import Tools from "./designs/Tools";

const Skills = () => {
	const data = [
		{
			title: "Frontend",
			skills: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Tailwind CSS",
				"Bootstrap",
			],
			design: <Frontend />,
		},
		{
			title: "Backend",
			skills: ["Node.js", "Express", "Mongoose", "GraphQL", "MongoDB", "MySQL"],
			design: <Backend />,
		},
		{
			title: "Tools",
			skills: [
				"VS Code",
				"Github",
				"Codepen",
				"Tailwind Play",
				"Stackblitz",
				"Codesandbox",
			],
			design: <Tools />,
		},
	];
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto gap-y-12 gap-x-6 px-8 md:px-0'>
			{data.map((item, idx) => (
				<Skill key={idx} {...item} />
			))}
		</div>
	);
};

export default Skills;
