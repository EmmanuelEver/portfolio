import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";


const ProjectImageSlider = ({code, images}) => {
    console.log(`${code}--${images.length}`)
    return(
        <>
            <Slider>
                <RadioInput name={code} type="radio" id={`${code}-image1`} checked/>
                <Label htmlFor={`${code}-image1`}></Label>
                <RadioInput name={code}type="radio" id={`${code}-image2`}/>
                <Label htmlFor={`${code}-image2`}></Label>
                

                <ImageContainer>
                    <ImageSlide>
                    {
                        images.map( image => (
                            <StyledImg  key={image.name} fluid={image.childImageSharp.fluid} alt={image.name}/>
                        ))
                        
                    }
                    </ImageSlide>
                </ImageContainer>
                
            </Slider>
        </>
    )
}

export default ProjectImageSlider;

const Slider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position:relative;
`

const ImageContainer = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
`
const ImageSlide = styled.div`
    width:200%;
    height:100%;
    display:flex;
    overflow: hidden;
    transition: all .3s ease-in;
`

const RadioInput = styled.input`
    display: none;

    &:first-of-type:checked + label{
        background: #fff;
    }
    &:last-of-type:checked + label{
        background: #fff;
    }
    &:first-of-type:checked ~ ${ImageContainer} > div{
        margin-left:0;
    }
    &:last-of-type:checked ~ ${ImageContainer} > div{
        margin-left: -100%;
    }
`

const Label = styled.label`
    padding: 5px;
    margin: 0 5px;
    background: #999;
    width: 20px;
    height: 20px;
    border-radius:50%;
    position: absolute;
    left: 50%;
    bottom:5%;
    z-index: 15;
    cursor:pointer;

    &:first-of-type{
        transform: translateX(-125%);
    }
    &:last-of-type{
        transform: translateX(25%);
    }
`
const StyledImg = styled(Img)`
    width: 100%;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    pointer-events: none;
    cursor: default;

    & img{
        object-fit:contain;
        object-position: center top !important;
        pointer-events: none;

    }
`