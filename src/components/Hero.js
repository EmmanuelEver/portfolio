import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa";
import Img from "gatsby-image"


const linkVariants={
	hover: {scale: 1.7, originX:0, color: "#fff"},
	transition: {type: "spring", stiffness : 300}
}

const Hero = () => {

	const data = useStaticQuery(graphql`
			query BgQuery {
		   		 bg : allImageSharp(filter: {fluid: {originalName: {eq: "home-illustration.png"}}}) {
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
		<HeroContainer>
			<HeroSection>
					<Content>
		  				<HeaderText>
		  					Hey, I'm Emmanuel
							Telewik and I
							love building
							beautiful websites
						</HeaderText>
						<CtaContainer>
							<ButtonCta href="#about-section">
							About Me 
							</ButtonCta>
						</CtaContainer>
		  			</Content>
				<StyledImage fluid={data.bg.nodes[0].fluid} alt={data.bg.nodes[0].fluid.originalName}/>
			</HeroSection>
		</HeroContainer>
	)
}

const HeroContainer = styled.section`
	display: flex;
	width: 100%;
	max-width: 1440px;
	min-height: 450px;
	padding: 0 5% 50px;
	margin: 0 auto;

	@media (max-width: 767px){
		min-height: unset;
		flex-direction: column-reverse;
		padding: 0;
	}

`

const HeroSection = styled.div`
	background:#64B6A5;
	border-radius: 15px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	padding: 50px 30px;

	@media (max-width: 767px){
		height: 100%;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 50px 0px 0;

	}
	@media (max-width: 1024px){
		height: 100%;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 50px 0px 0;

	}
`

const StyledImage = styled(Img)`
	height: 100%;
	width: 50%;

	& img, & pircture > img{
        object-fit:contain !important;
        object-position: center center !important;
        pointer-events: none;

    }

    @media (max-width: 1024px){
		width: 100%;
	}
	
`


const Content = styled.div`
	width: 50%;
	z-index: 5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (max-width: 767px){
		padding: 0 37px;
		align-items: center;
	}
	@media (max-width: 1024px){
		width: 100%;
		padding: 0 100px;
		align-items: center;
	}

`
const HeaderText = styled.h1`
	font-family: var(--text-secondary);
	font-size: 2.5rem;
	font-size: clamp(1.8rem, 4vw, 3rem);
	line-height: 1.2;
	line-height: calc( clamp(1.8rem, 3vw, 3.rem) * 1.25);
	font-weight: 700;
	letter-spacing: 1px;
	color:#fff;
	text-align: left;

	@media (max-width: 767px){
		text-align: center;
		font-weight: 500;
	}

`
const CtaContainer = styled.div`
	   margin-top: 50px;

`


const ButtonCta = styled(Link)`
    background-color: #203A4B;
    border-radius: 5px;
    color: #FAFAFA;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    min-width: 200px;
    font-family: var(--text-secondary);
    font-size: clamp(.8rem, 1.5vw, 1rem);
    cursor: pointer;
    transition: all .3s ease-in-out;
    letter-spacing: 2px;
    text-transform: uppercase;
    position: relative;

    &:hover{
    	opacity: .9;
    	transform: scale(1.05);
    	font-size: 700;
    }
    &:active{
    	opacity: .8;
    	transform: scale(0.8);
    	font-size: 700;
    }
`



export default Hero;
