import React from "react"
import styled from "styled-components"
import {useStaticQuery, graphql, Link} from "gatsby"
import ContactSection from "../components/ContactBanner" 
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const ProjectsHero = () => {

	const data = useStaticQuery(graphql`
			query ProjectsBg {
		   		bg : allImageSharp(filter: {fluid: {originalName: {eq: "projects-illustration.png"}}}) {
				    nodes {
				      fluid {
				        ...GatsbyImageSharpFluid
				      }
				    }
				  }		   
				}
		`
	)


	return(
		<HeroSection>
			<HeroContainer>
					<Content>
		  				<HeaderText>
		  					Projects
						</HeaderText>
						<SubHeaderText>
							I build websites that serve as powerful marketing tools and bring memorable brand experiences.
						</SubHeaderText>
		  			</Content>
		  			<ImageContainer>
		  				<StyledImg fluid={data.bg.nodes[0].fluid}/>
		  			</ImageContainer>
			</HeroContainer>
		</HeroSection>
	)
}






export default ProjectsHero;

const HeroSection = styled.div`
	padding: 0 5%;
	max-width:1440px;
	margin: 0 auto;

	@media (max-width: 767px){
		padding: 0;
	}
`

const HeroContainer = styled.div`
	padding: 0 20px;
	width: 100%;
	height: 370px;
	border-radius:15px;
	background: #64B6A5;
	display:flex;
	align-items:center;
	justify-content:flex-start;
	position:relative;

	@media (max-width: 767px){
		justify-content: center;
		border-radius:0;
	}
`

const ImageContainer = styled.div`
	position: absolute;
	top:0;
	right:0;
	width:50%;
	height:100%;

	@media (max-width: 767px){
		display: none;
	}
`

const Content = styled.div`
	width:50%;
	max-width: 600px;
	position:relative;
	z-index: 5;

	@media (max-width: 767px){
		width: 100%;
	}
`


const StyledImg = styled(Img)`
	width: 100%;
	height: 100%;

	& img, & pircture > img{
        object-fit:contain !important;
        object-position: center center !important;
        pointer-events: none;

    }
`


const HeaderText = styled.h1`
	font-family: var(--text-secondary);
	font-size: 2.5rem;
	font-size: clamp(2.5rem, 3vw, 4.5rem);
	line-height: 1.2;
	line-height: calc( clamp(2.5rem, 3vw, 4.5rem) * 1.25);
	font-weight: 700;
	letter-spacing: 2px;
	color:#fff;
	text-align: left;

	@media (max-width: 767px){
		text-align: center;
	}

`

const  SubHeaderText = styled.p`
	color: #fff;
	font-size: clamp(1rem, 2vw, 1.3rem);
	line-height: calc( clamp(1rem, 2vw, 1.3rem) * 1.5);
	font-weight: 400;

	@media (max-width: 767px){
		text-align: center;
	}
`