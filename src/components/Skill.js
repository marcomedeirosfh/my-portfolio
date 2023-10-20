import React from "react"
import { styled } from '@mui/system'

const StyledSkill = styled('div')`
    font-weight: 700;
    color: var(--green-900);
    opacity: 0.1;
    &:hover {
        opacity: 0.6;
        transition: 1000ms;
    }

    @media only screen and (max-width: 860px) {
        display: none;
        visibility: hidden;
    } 
`

const Skill = ({skill, size, fontWeight}) => {
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      };

        const x = getRandomInt(10, 70);
        const y = getRandomInt(10, 70);

    return (
        <StyledSkill
            style={{
                position: "absolute",
                top: `${y}%`,
                left: `${x}%`,
                fontSize: `${size}rem`,
                fontWeight: `${fontWeight}`
            }}
        >
            {skill}
        </StyledSkill>
    )
}

export default Skill 