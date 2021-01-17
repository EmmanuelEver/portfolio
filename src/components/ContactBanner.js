import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import styled from "styled-components"


const ContactBanner = () => {

	return(
		<>
			<ContactSection>
				<HeaderText>
					Interested in doing a project together?
				</HeaderText>

				<LinkToContact to="/contact">
							Contact Me
				</LinkToContact>
			</ContactSection>
		</>
	)
}


const ContactSection = styled.section`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10% 150px;

	@media (max-width: 767px){
		flex-direction: column;
		padding: 40px 37px;
	}
`
const HeaderText = styled.h2`
	font-family: 'Libre Baskerville', serif;
	font-size: clamp(1.5rem, 4vw, 2.15rem);
	line-height: calc( clamp(1.5rem, 4vw, 2.15rem)* 1.35);
	font-weight: 700;
	letter-spacing: 1px;
	color:#313037;
	width: 60%;
	text-align: center;

	@media (max-width: 767px){
		width: 100%;
	}
`

const LinkToContact = styled(Link)`
	background-color: #203A4B;
    color: #FAFAFA;
    border: 1px solid #313037;
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

    @media (max-width: 767px){
    	margin-top: 30px;
    }
`
export default ContactBanner;