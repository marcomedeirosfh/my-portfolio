import React from "react";
import { styled } from '@mui/system'
import Skill from "./Skill";

const StyledAbout = styled('section')`
    width: 80%;
    margin: auto;
`

const About = () => {
    return (
        <StyledAbout>
            <h2>About Me</h2>
            <p>Passionate about technology since a young age, I have always  been immersed on the internet and geek culture. The exposure and familiarity with different devices and applications motivated me to apply that knowledge and experience to build products that are good for both users and stakeholders.</p>
            <p>I believe that solving problems is more important than specific tools, so even though I’m more familiar with React and Figma, I’m an adept of continuous learning and always willing to learn new skills as needed.</p>
            <h3>Experience</h3>
            <p>Software Engineer Contractor</p>
            <p>at Dell from 06/2022 to present</p>
            <p>Designed and developed UI components and games. </p>
            <p>React JS, Figma, Gatsby, Material UI, Phaser, GitLab, Jira.</p>
            <p>Technical Support Specialist</p>
            <p>at Accenture from 11/2021 to 05/2022</p>
            <p>Level 2 technical support, investigating troubleshooting, testing and escalating both design and functional bugs and issues.</p>
            <p>Jira, Confluence, internal bug tracking tools.</p>
            <p>Quality Assurance Tester</p>
            <p>at Keywords Studios from 05/2019 to 06/2021</p>
            <p>Testing and reporting linguistic, design and functional bugs and issues.</p>
            <p>Jira, Confluence, internal bug tracking tools.</p>
            <h3>Education</h3>
            <p>Web Applications Development</p>
            <p>Technological University Dublin from 2019 to 2020</p>
            <p>UX Design</p>
            <p>UX Design Institute from 2023 to 2024</p>
            </StyledAbout>
    )
}

export default About