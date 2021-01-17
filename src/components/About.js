import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"



const About = () => {

	const data = useStaticQuery(graphql`
			query AboutBgQuery {
		   		 bg : allImageSharp(filter: {fluid: {originalName: {eq: "profile.jpeg"}}}) {
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
		<>
			<AboutSection id="about-section">
				<AboutContainer >
					<AboutImage>
						<Img fluid={data.bg.nodes[0].fluid} alt={data.bg.nodes[0].fluid.originalName}/>
					</AboutImage>
					<AboutContent>
						<HeaderText>
							About Me
						</HeaderText>
						<AboutText>
							I’m a junior web developer looking for freelance to partime jobs. 
							I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
							When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. 
							I’m based in Philippines, but I’m happy working remotely and have experience in remote teams. 
							When I’m not coding, you’ll find me outdoors. 
							I love being out playing basketball and working out. 
							I’d love you to check out my work.
						</AboutText>

						<LinkToPortfolio to="/projects">
							Go To Portfolio
						</LinkToPortfolio>

					</AboutContent>
				</AboutContainer>
			</AboutSection>

		</>

	)
}

const AboutSection = styled.section`
	max-width: 1920px;
	margin: 0 auto;
	padding: 150px 10%;

	@media (max-width: 767px){
		padding 50px 37px;
	}
`

const AboutContainer = styled.div`
	width: 100%;
	display:flex;
	align-items: flex-start;

	@media (max-width: 767px){
		flex-direction: column;
	}
`

const AboutImage = styled.div`
	align-self: stretch;
	width: 50%;

	@media (max-width: 767px){
		width: 100%;
	}
`

const AboutContent = styled.div`
	width: 30%;
	padding-bottom: 50px;
	margin-left: 75px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	text-align: left;
	border-bottom: 1px solid #929294;

	@media (max-width: 767px){
		margin-left: 0;
		width: 100%;
	}

	@media (max-width: 1024px) and (min-width: 768px){
		width: 40%;
	}

`

const HeaderText = styled.h2`
	font-family: 'Libre Baskerville', serif;
	font-size: clamp(1.5rem, 4vw, 2.15rem);
	line-height: calc( clamp(1.5rem, 4vw, 2.15rem)* 1.35);
	font-weight: 700;
	letter-spacing: 1px;
	color:#313037;
	margin-bottom: 30px;
`

const AboutText = styled.p`
	color: #929294;
	font-size: clamp(.8rem, 2vw, 1rem);
	line-height: calc( clamp(.8rem, 2vw, 1rem) * 1.5);
	font-weight: 400;
`

const LinkToPortfolio = styled(Link)`
	background-color: #203A4B;
    color: #FAFAFA;
    padding: 1rem 2rem;
    border: 1px solid #313037;
    text-decoration: none;
    display: inline-block;
    font-size: clamp(.8rem, 1.5vw, 1rem);
    min-width: 100px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-size: 500;
    letter-spacing: 2px;
    margin-top: 50px;
    text-transform: uppercase;

    @media (max-width: 767px){
		margin-left: 0px;
		margin-top: 30px;
	}

    &:hover{
    	background-color: #f2f2f2;
    	color: #000;
    	transform: scale(1.05);
    	font-size: 700;
    }
    &:active{
    	background-color: #f2f2f2;
    	color: #000;
    	transform: scale(0.8);
    	font-size: 700;
    }
`

export default About;