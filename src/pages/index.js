import React, {useEffect} from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import ContactBanner from "../components/ContactBanner"
import ogImage from "../images/image-home.png"

const IndexPage = () => {

  //useEffect for hiding sidebar
  useEffect(() => {

		return () => {document.getElementById("toggle-menu").checked = false}
  }, [])
  
  return(
    <>
      <SEO 
        title="Home"
        image={ogImage}
      />
      <Hero/>
      <About/>
      <ContactBanner/>
    </>
  )
  
}

export default IndexPage