import React from "react"
import SEO from "../components/seo"
import ProjectList from "../components/Projects"
import ogImage from "../images/image-works.png"
import ContactSection from "../components/ContactBanner" 
import ProjectsHero from "../components/ProjectsHero"

const Projects = () => {
	
	return (
	<>
	  <SEO 
	  title="Projects"
	  description="Hey, I'm proud to show you the Projects I've built and collaborated with, Although I'm a new developer I've already been part of major projects and a startup"
	  image={ogImage}
	  />
	  	<ProjectsHero/>
	  	<ProjectList/>
		<ContactSection/>
	</>
	)

}



export default Projects;