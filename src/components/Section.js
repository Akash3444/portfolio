import React from "react";

const Section = ({ id, title, Section }) => {
	return (
		<section className='py-10' id={id}>
			<h1 className='section__title'>{title}</h1>
			<Section />
		</section>
	);
};

export default Section;
