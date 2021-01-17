import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import { AnimatePresence, motion } from "framer-motion"

const duration = 0.5

const variants = {
  initial: {
	opacity: 0,
	x:"100vw",
	
  },
  enter: {
	opacity: 1,
	x:"0vw",
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
	opacity: 0,
	x:"-100vw",
    transition: { 
		duration: duration,
		delay: duration,
	},
  },
}
const Layout = ({children, location}) => {
	return(
		<>
		<GlobalStyles/>
		<Section>
			<Header/>
			<AnimatePresence exitBeforeEnter>
				<MainSection
					key={location.pathname}
					variants={variants}
					initial="initial"
					animate="enter"
					exit="exit"
				>
					{children}
				</MainSection>
			</AnimatePresence>
			<Footer/>
		</Section>
		</>
	)
}

const Section = styled.section`
	overflow-x:hidden;
`

const MainSection = styled(motion.main)`
	width: 100%;
    background: #fafafa;
`

export default Layout;