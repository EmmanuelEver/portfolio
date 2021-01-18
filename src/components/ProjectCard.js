import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { 
 FaLink, 
 FaGlobeAmericas,
} from "react-icons/fa";
import Img from "gatsby-image"




const ProjectCard = ({title, data, code, images}) => {	
	const [cardImages, setCardImages] = useState([])

	useEffect( () => {
		let imageItems = images.filter( image => image.name?.includes(`${code}-`))
		setCardImages(imageItems)
	}, [])

	
	return(
		<>
			<Card>
				<CardImage>
					<StyledImg fluid={data.cardImage?.childImageSharp.fluid} alt={title}/>
					<SiteLinks>
						<LinksContainer>
							{
							data.siteUrl && 
								<LiveSiteUrl href={data.siteUrl}>
									<WebIcon>
										<FaGlobeAmericas />
									</WebIcon>
										Live Site
									</LiveSiteUrl>
							}
							{
							data.demo && 
								<LiveSiteUrl href={data.demo}>
									<LinkIcon>
										<FaLink />
									</LinkIcon>
										Demo Site
									</LiveSiteUrl>
							}
						</LinksContainer>
					</SiteLinks>
				</CardImage>
				<CardSummary>
					<TitleContainer>
						<Title>{title}</Title>
					</TitleContainer>
					<Summary>
						{data.summary}
					</Summary>
				</CardSummary>
			</Card>
		</>
	)
}

const Card = styled.div`
	width: 350px;
	display: flex;
	color: #616161;
	flex-direction: column;
	border-radius:15px;
	margin: 10px;
	overflow:hidden;
	transition: all 0.2s ease-in-out;

	@media (max-width: 767px){
		width: 90%;
		max-width:375px;
		flex-direction: column;
	}

	@media (max-width: 1024px) and (min-width: 768px){
		width:720px;
		flex-direction: row;
		margin: 10px 0;
	}


	&:hover {
		transform: scale(1.015);
		box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px, rgba(71, 63, 79, 0.16) 0px 8px 24px;
	}
	&:hover > div:last-child {
		background: #64B6A5;
	}
	&:hover p{
		color: #fff !important;
	}
`
const SiteLinks = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background:rgba(253, 243, 240, .8);
	visibility:hidden;
	z-index: 10;
	transition: all .3s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: scale(0);
	opacity: 0;
	border-radius: 50%;
`
const CardImage = styled.div`
	width: 100%;
	cursor: pointer;
	height: 350px;
	position: relative;
	@media (max-width: 1024px) and (min-width: 768px){
		width:50%;
		height: 320px;
	}

	&:hover ${SiteLinks} {
		visibility:visible;
		transform: scale(1);
		opacity:1;
		border-radius: 0;
	}

`

const StyledImg = styled(Img)`
	width: 100%;
	height: 100%;

	& img{
        object-fit:contain;
        object-position: center top !important;
        pointer-events: none;

    }
`

const CardSummary = styled.div`
	flex: 1;
	padding: 1.5rem;
	background: #fdf3f0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;


	@media (max-width: 1024px) and (min-width: 768px){
		
	}

`

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`

const Title = styled.p`
	font-weight: 600;
	font-size: clamp(1.3rem, 2vw, 1.7rem);
    line-height: calc(clamp(1.3rem, 2vw, 1.7rem) * 1.3);
	color:#64B6A5;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-align: center;

	${Card}:hover{
		color:#fff;
	}
`

const Summary = styled.p`
	font-size: clamp(1rem, 1.3vw, 1.2rem);
    line-height: calc(clamp(1rem, 1.3vw, 1.2rem) * 1.2);
    color: #333136;
    text-align: center;
    font-weight: 300;
`

const LinksContainer = styled.div`
	display: flex;
	align-items: center;

	> * {
      &:first-child {
         margin-right: 20px;
      }
    }

    @media (max-width: 960px){
		flex-direction: column;
		align-items: flex-start;

		> * {
	      &:first-child {
	         margin-right: 0px;
	         margin-bottom: 20px;
	      }
	    }
	}

    @media (max-width: 767px){
		flex-direction: column;
		align-items: flex-start;

		> * {
	      &:first-child {
	         margin-right: 0px;
	         margin-bottom: 20px;
	      }
	    }
	}
`

const WebIcon = styled(FaGlobeAmericas)`
	margin-right: 10px;
`
const LinkIcon = styled(FaLink)`
	margin-right: 10px;
`


const LiveSiteUrl = styled.a`
	background-color: #f2f2f2;
    border: 1px solid #d2dae2;
    border-radius: 40px;
    color: #616161;
    padding: 1rem 1.3rem;
    text-align: center;
    text-decoration: none;
    display: flex;
	align-items: center;
	justify-content: space-around;
    font-size: clamp(.8rem, 1.2vw, 1rem);
    font-Family: var(--text-secondary);
    min-width: 160px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: 500;
    letter-spacing: 1px;
	text-transform: uppercase;
	
    &:hover{
		box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
    	color: #000;
    	transform: scale(1.05);
    	font-size: 700;
    }
    &:active{
		box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
    	color: #000;
    	transform: scale(0.8);
    	font-size: 700;
    }
`


export default ProjectCard;


