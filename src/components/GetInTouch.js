import React from "react"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import {useStaticQuery, graphql, Link} from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const GetInTouch = () => {

	return(
		<>
			<GitSection>
				<SectionWrapper>
					<Heading>
						<HeaderText>
							Get in Touch
						</HeaderText>
					</Heading>

					<Body>
						<Content>
							<ContentText>
								I’d love to hear about what you’re working on and how I could help.
								I’m accepting freelance or partime jobs and am open to a wide range of opportunities.
								As I'm a partime developer at <SpanText>developer branded</SpanText> and <a href="https://www.kraftora.com"> <SpanText>Kraftora</SpanText></a>,
								my preference would be freelance projects or partime jobs. 
								But I’m also happy to hear about opportunites that don’t fit that description. 
								I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. 
								Please do feel free to check out my online profiles below and get in touch using the form.
							</ContentText>

							<SocMedLinks>
								<SocMedLink href="https://www.facebook.com/1Shank1/">
									<FaFacebook />
								</SocMedLink>
								<SocMedLink  href="https://www.instagram.com/mr_shank2/">
									<FaInstagram/>
								</SocMedLink>
								<SocMedLink  href="https://www.linkedin.com/in/emmanuel-ever-telewik-9252ab18b/" >
									<FaLinkedin/>
								</SocMedLink>
								<SocMedLink href="https://github.com/EmmanuelEver">
									<FaGithub/>
								</SocMedLink>
								<SocMedLink href="mailto:everlopeztelewik@gmail.com">
									<MdEmail/>
								</SocMedLink>
							</SocMedLinks>
						</Content>
					</Body>
				</SectionWrapper>
			</GitSection>
		</>
	)
}

const GitSection = styled.section`
	max-width: 1920px;
	margin: 0 auto;
	padding: 100px 10%;

	@media (max-width: 767px){
		padding: 0px 37px 50px 37px;
	}
`

const SectionWrapper = styled.div`
	border-bottom: 1px solid #dcdcde;
	border-top: 1px solid #dcdcde;
	padding: 50px 0;
	display:flex;
	justify-content; space-between;

	@media (max-width: 1024px){
		flex-direction: column;
		padding: 25px 0;
	}
`

const Heading = styled.div`
	margin-right:50px;
	width: 30%;

	@media (max-width: 1024px){
		width: 100%;
		margin-right: 0;
		margin-bottom: 30px;
	}
`

const HeaderText = styled.h1`
	font-family: var(--text-primary);
	font-weight: 700;
	font-size: clamp(2.5rem, 2vw, 3rem);
    line-height: calc(clamp(2.5rem, 2vw, 3rem) * 1.3);
	color:#33323D;
`

const Body = styled.div`
	flex:1;
`

const Content = styled.div`

`

const ContentText = styled.p`
	color:#33323D;
	font-size: clamp(.9rem, 2vw, 1rem);
	line-height: calc( clamp(.9rem, 2vw, 1rem) * 1.5);
	font-weight: 400;
	margin-bottom: 30px;
	opacity: .8;
`
const SpanText = styled.span`
	text-decoration:none !important;
	color:#33323D;
	font-style: italic;
`
const SocMedLinks = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
const SocMedLink = styled.a`
	margin-right: 15px;
	text-decoration: none;
	color:#33323D;
	cursor: pointer;
	font-size: clamp(1.5rem, 2vw, 2rem);
	&:hover{
		color: #64B6A5;
	}

`

export default GetInTouch;