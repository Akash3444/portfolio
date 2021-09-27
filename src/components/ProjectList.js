import React from "react";
import Project from "./Project";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
	SiGraphql,
	SiApollographql,
	SiMongodb,
	SiTailwindcss,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const ProjectList = () => {
	const projects = [
		{
			title: "Instagram Clone",
			description:
				"Instagram clone app in which user can create, view, bookmark, like, unlike, and comment the post. User can search user and view their profile.",
			links: {
				source: "https://github.com/Akash3444/social-media",
				main: "https://social-app-3444.netlify.app/",
			},
			skills: [
				FaReact,
				SiGraphql,
				SiApollographql,
				SiMongodb,
				FaNodeJs,
				SiTailwindcss,
			],
		},
		{
			title: "Fiber",
			description:
				"Fiber is a landing page. With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.",
			links: {
				source: "https://github.com/Akash3444/Fiber",
				main: "https://akash3444.github.io/Fiber/",
			},
			skills: [FaHtml5, FaCss3Alt, IoLogoJavascript, SiTailwindcss],
		},
		{
			title: "Tic Tac Toe",
			description: "Tic tac toe game created using HTML, CSS, and JavaScript.",
			links: {
				source: "https://github.com/Akash3444/Tic-Tac-Toe",
				main: "https://akash3444.github.io/Tic-Tac-Toe/",
			},
			skills: [FaHtml5, FaCss3Alt, IoLogoJavascript],
		},
		{
			title: "Huddle",
			description:
				"Huddle is a landing page. Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
			links: {
				source: "https://github.com/Akash3444/huddle",
				main: "https://akash3444.github.io/huddle/",
			},
			skills: [FaHtml5, FaCss3Alt, IoLogoJavascript, SiTailwindcss],
		},
		{
			title: "Calculator",
			description: "A calculator app with simple UI and arithmetic opeations.",
			links: {
				source: "https://github.com/Akash3444/calculator",
				main: "https://akash3444.github.io/calculator/",
			},
			skills: [FaHtml5, FaCss3Alt, IoLogoJavascript, SiTailwindcss],
		},
	];
	return (
		<div className='px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-y-12 gap-x-6'>
			{projects.map((project, idx) => (
				<Project key={idx} id={idx + 1} {...project} />
			))}
		</div>
	);
};

export default ProjectList;
