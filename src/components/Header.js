import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../images/logo.png'
import { motion } from "framer-motion"

const linkVariants = {
	hover: { color: "#64B6A5", scale: 1.3},
	transition: { type: "spring", stiffness: 120 }
}

const Header = () => {
	return(
		<HeaderSection>
			<HeaderBrand to="/">
					<Logo src={logo} alt="emmanuel Dalbong Telewik" animate={{rotate: 360}} transition={{ duration: 1.5 }}/>
			</HeaderBrand>
			<HeaderNav>
				<HeaderNavLink to="/" activeClassName="link-active">
						HOME
				</HeaderNavLink>
				<HeaderNavLink to="/projects" activeClassName="link-active">
						PROJECTS 
				</HeaderNavLink>
				<HeaderNavLink to="/contact" activeClassName="link-active">
						CONTACT 
				</HeaderNavLink>
			</HeaderNav>
			<MobileMenu>
				<MenuToggle type="checkbox" id="toggle-menu"/>
				<HamburgerIcon htmlFor="toggle-menu">
						<Bar/>
				</HamburgerIcon>
				<SideNav>
					<SideNavItem>
						<SideNavLink to="/">HOME</SideNavLink>
					</SideNavItem>
					<SideNavItem>
						<SideNavLink to="/projects">PORTFOLIO</SideNavLink>
					</SideNavItem>
					<SideNavItem>
						<SideNavLink to="/contact">CONTACT ME</SideNavLink>
					</SideNavItem>
				</SideNav>
			</MobileMenu>
		</HeaderSection>
	)
}

const HeaderSection = styled.header`
	margin: 0 auto;
	max-width: 1440px;
	height: 140px;
	padding: 0 5%;
	background:transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position:relative;
	z-index:15;

	@media (max-width: 767px){
		height: 100px;
	}
`

const Logo = styled(motion.img)`
	height: 100%;
	object-fit: contain;
`
const HeaderBrand = styled(Link)`
	height: 50%;
`
const HeaderNav = styled.nav`
	display: flex;
	align-items: center;

	@media (max-width: 767px){
		display: none;
	}
`
const HeaderNavLink = styled(Link)`
	text-decoration: none;
	color: #333136;
	margin: 0 2rem;
	font-size: clamp(.8rem, 3vw, 1rem);
	font-weight: 400;
	letter-spacing: 2px;
	cursor: pointer;

	&:hover{
		color:#64B6A5;
	}
`


const MobileMenu = styled.div`
	width: 40px;
	height: 40px; 
	display: none;

	@media (max-width: 767px){
		display: block;
	}
`

const SideNav = styled.ul`
	list-style:none;
	position: fixed;
	top: 100px;
	left:100%;
	z-index:20;
	width:100%;
	height: calc(100% - 100px);
	background: #34323D;
	display:none;
	flex-direction: column;
	align-items: flex-start;
	padding: 50px 37px;
	transform: translateX(0%);
	transition: all .5s ease-in-out;

	@media (max-width: 767px){
		display:flex;
	}
`

const SideNavItem = styled.li`
	margin-bottom: 30px;
`

const SideNavLink = styled(Link)`
	text-decoration: none;
	font-size:24px;
	line-height: 1.3;
	color: #f7f7f7;
`

const Bar = styled.span`
	height: 2.5px;
	width: 100%;
	position:relative;
	background: #000;
	border-radius: 1.25px;
	transition: all .3s ease-in-out;
	

`

const HamburgerIcon = styled.label`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&::before, &::after{
		content:"";
		position: absolute;
		left: 0;
		top:50%;
		width: 100%;
		height: 3px;
		background: #000;
		border-radius: 1.25px;
		transition: all .5s ease-in-out;
	}
	&::before{
		transform: translateY(calc(-50% - 8px));
	}
	&::after{
		transform: translateY(calc(-50% + 8px));
	}
`

const MenuToggle = styled.input`
	display:none;

	&:checked + ${HamburgerIcon}{
		transform: rotate(45deg);
	}
	&:checked + ${HamburgerIcon} > span {
		transform: translateX(-50px);
		opacity:0;
	}
	&:checked + ${HamburgerIcon}::before {
		transform: translate(0%, -50%);
	}
	&:checked + ${HamburgerIcon}::after {
		transform: translate(0%, -50%) rotate(90deg);
	}
	&:checked ~ ${SideNav} {
		transform: translateX(-100%);
	}
`



export default Header;