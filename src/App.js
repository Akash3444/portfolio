import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='space-y-14'>
			<Hero />
			<Section title='Projects' id='projects' Section={ProjectList} />
			<Section title='Skills' id='skills' Section={Skills} />
			<Section title='Contact Me' id='contact' Section={Contact} />
		</div>
	);
}

export default App;
