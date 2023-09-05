import React from "react"
import { styled } from "@mui/system"
import { StaticImage } from "gatsby-plugin-image"

const StyledHero = styled('section')`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 10vh;
    
    * {
        margin: auto;
    }

    img {
        width: 450px;
    }

    .hero-text {
        display: flex;
        flex-direction: column;

        h2 {
            color: var(--white);
            font-size: 7.5rem;
        }

        h3 {
            color: var(--blue-100);
            font-size: 3rem;
        }
        
        p {
                font-size: 2rem;
                text-align: center;
            }
    }

    @media (max-width: 740px) {
        margin-top: 15vh;

        img {
            width: 80%;
            margin: auto;
        }

        .hero-text {
            h2 {
                font-size: 3rem;
                margin-top: 2rem;
                text-align: center;
            }

            h3 {
                margin-top: 0.75rem;
                font-size: 2rem;
                text-align: center;
            }

            p {
                margin-top: 0.75rem;
                font-size: 1.3rem;
                text-align: center;
            }
        }
    }
`

const Hero = () => {
    return (
        <StyledHero>
            <StaticImage 
                src="../images/Profile.jpeg"
                alt="Marco's logo"
                width={450}
            />
            <div className="hero-text">
                <h2>UI and UX</h2>
                <h3>Designer and Developer</h3>
                <p>Using technology to create dynamic and user-centered interactive experiences.</p>
            </div>            
        </StyledHero>
    )
}

export default Hero 