import React from "react";
import { styled } from '@mui/system'
import Skill from "./Skill";

const StyledHero = styled('section')`
    width: 80%;
    margin: auto;

    span {
        color: var(--white);
        font-weight: 500;
    }

    .hero-intro {
        margin-top: 80px;
        font-size: 2rem;
    }

    .hero-tagline {
        margin-top: 80px;
        font-size: 4rem;
    }

    img {
        width: 80px;
    }

    @media only screen and (max-width: 860px) {
        width: 90%;
        margin: auto;

        .hero-intro {
            margin-top: 80px;
            font-size: 2rem;
        }

        .hero-tagline {
            margin-top: 80px;
            font-size: 3rem;
        }
    } 
`

const Hero = () => {
    return (
        <StyledHero>
            <p className="hero-intro">Hi there, I'm <span>Marco</span>!</p>
            <p className="hero-tagline">I design and develop user interfaces.</p>
            <Skill skill='UX' size='5'fontWeight='500'/>
            <Skill skill='UI' size='5'fontWeight='500'/>
            <Skill skill='Frontend Development' size='5' fontWeight='500'/>
            <Skill skill='React' size='3'fontWeight='400'/>
            <Skill skill='Figma' size='3' fontWeight='400'/>
            <Skill skill='HTML' size='3' fontWeight='400'/>
            <Skill skill='CSS' size='3' fontWeight='400'/>
            <Skill skill='Javascript' size='3' fontWeight='400'/>
        </StyledHero>
    )
}

export default Hero