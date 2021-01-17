import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return(

		<FooterSection>
			<FooterContainer>
				<FooterNav>
					<FooterBrand>

					</FooterBrand>
					<FooterNavLink to="/">
						HOME
					</FooterNavLink>
					<FooterNavLink to="/projects">
						PORTFOLIO
					</FooterNavLink>
					<FooterNavLink to="/contact">
						CONTACT ME
					</FooterNavLink>
				</FooterNav>

				<FooterSocMed>
					<SocMedLink href="https://www.facebook.com/1Shank1/">
						<FaFacebook />
					</SocMedLink>

					<SocMedLink href="https://www.instagram.com/mr_shank2/">
						<FaInstagram />
					</SocMedLink>

					<SocMedLink href="https://www.linkedin.com/in/emmanuel-ever-telewik-9252ab18b/">
						<FaLinkedin />
					</SocMedLink>

					<SocMedLink href="https://github.com/EmmanuelEver">
						<FaGithub />
					</SocMedLink>
				</FooterSocMed>
			</FooterContainer>
		</FooterSection>
	)
}

const FooterSection = styled.footer`
	max-width: 1920px;
	margin: 0 auto;
	background: #34323D;
	padding: 20px 10%;
`

const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 767px){
		flex-direction: column;
	}
`

const FooterNav = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 767px){
		flex-direction: column;
	}
`

const FooterBrand = styled.div`

`

const FooterNavLink = styled(Link)`
	text-decoration: none;
	color: #fafafa;
	margin: 0 1.5rem;
	font-size: clamp(.7rem, 1vw, .9rem);
	font-weight: 500;
	letter-spacing: 1px;
	cursor: pointer;
	text-align: center;

	@media (max-width: 767px){
		margin: 0 0 1.5rem 0;
	}
`

const FooterSocMed = styled.div`
	display: flex;
	align-items: center;
	gap:.8rem;

`

const SocMedLink = styled.a`
	text-decoration: none;
	color: #fafafa;
	cursor: pointer;
	height: 20px;
	&:hover{
		color: #fff;
	}

`

export default Footer;