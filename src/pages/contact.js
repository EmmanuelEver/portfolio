import React from "react"
import SEO from "../components/seo"
import ogImage from "../images/image-contact.png"
import styled from "styled-components"
import GetInTouch from "../components/GetInTouch"
import ContactMe from "../components/ContactMe"


const Contact = () => {
	return(
		<>
			<SEO 
				title="Contact"
				description="I would love to talk with you about your planned project. 
				Please feel free to leave me a message or reach me out in my social media accounts \"
				image={ogImage}
				/>
				<ContactPage>
					<GetInTouch />
					<ContactMe />
				</ContactPage>
	  	</>
	)
}

const ContactPage = styled.section`
	max-width: 1920px;
	margin: 0 auto;

	@media (max-width: 767px){
		flex-direction: column;
	}
`


export default Contact