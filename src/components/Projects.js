import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"
import {useStaticQuery, graphql} from "gatsby"


const ProjectList = () => {

	const data = useStaticQuery(graphql`
			query ProjectsQuery {
		    projects : allProjectsJson {
		      nodes {
		        code
		        title
		        data {
		          siteUrl
		          status
		          type
		          demo
		          description
		          role
		          tools
        		  responsive
        		  summary
        		  logo {
			          absolutePath
			          childImageSharp {
			            fluid {
			              ...GatsbyImageSharpFluid
			            }
			          }
			        }
			      cardImage {
			          absolutePath
			          childImageSharp {
			            fluid {
			              ...GatsbyImageSharpFluid
			            }
			          }
			        }
		        }
		      }
		    }
		    images : allFile(filter: {relativeDirectory: {eq: "projects"}}) {
				nodes {
				  name
				  childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				  }
				}
			  }
		  }
	`)

	return(
		<>
			<ProjectsSection>
				<ProjectsContainer>
					{
			    		data.projects.nodes.map( project => (
			    			<ProjectCard 
			    			key={project.code}
			    			code={project.code} 
			    			title={project.title} 
			    			data={project.data}
			    			images={data.images.nodes}
			    			/>
			    		))	
		    		}
				</ProjectsContainer>
			</ProjectsSection>
		</>
	)
}

const ProjectsSection = styled.section`
	max-width: 1440px;
	margin: 0 auto;
	padding: 150px 3%;
	
	@media (max-width: 767px){
		padding: 75px 27px;
	}
`

const ProjectsContainer = styled.div`
	width: 100%;
	display:flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;

	@media (max-width: 1024px){
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 767px){
		flex-direction: column;
		align-items: center;
	}

`

export default ProjectList