import React from "react";
import { styled } from '@mui/system'

const StyledAbout = styled('section')`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    .title {
        font-weight: 500;
        color: var(--green-900);
        margin-bottom: 40px;
        font-size: 1.75rem;
    }

    .description {
        font-size: 1.25rem;
    }

    .highlight {
        margin-bottom: 10px;
    }

    .subtitle {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .job-title {
        font-size: 1.5rem;
        color: var(--white)
    }

    .container {
        width: 80%;
        margin: 40px auto;
    }

    .two-col-container {
        display: flex;
        flex-direction: row;
    }

    .technologies {
        color: var(--green-900);
    }
`

const About = () => {
    return (
        <StyledAbout>
                <h2 className="title">About Me</h2>
            <div className="container">
                <p className="description"><span className="highlight">Passionate about technology</span> since a young age, I have always  been immersed on the internet and geek culture. The exposure and familiarity with different devices and applications motivated me to apply that knowledge and experience to <span className="highlight">build products that are good for both users and stakeholders</span>.</p>
                <br/>
                <p className="description">I believe that solving problems is more important than specific tools, so even though I’m more familiar with <span className="highlight">React</span> and <span className="highlight">Figma</span>, I’m an adept of <span className="highlight">continuous learning</span> and always willing to learn new skills as needed.</p>
            </div>
            <div className="two-col-container">
                <div className="container">
                    <h3 className="title">Experience</h3>
                    <div className="container">
                        <p className="job-title">Software Engineer</p>
                        <p className="subtitle">at Dell from 06/2022 to present</p>
                        <ul>
                            <li>
                                <p>Designed and developed UI components and games. </p>
                            </li>
                            <li>
                                <p className="technologies">React JS, Figma, Gatsby, Material UI, Phaser, GitLab, Jira.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="container">
                        <p className="job-title">Technical Support Specialist</p>
                        <p className="subtitle">at Accenture from 11/2021 to 05/2022</p>
                        <ul>
                            <li>
                                <p>Level 2 technical support, investigating troubleshooting, testing and escalating both design and functional bugs and issues.</p>
                            </li>
                            <li>
                                <p className="technologies">Jira, Confluence, internal bug tracking tools.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="container">
                        <p className="job-title">Quality Assurance Tester</p>
                        <p className="subtitle">at Keywords Studios from 05/2019 to 06/2021</p>
                        <ul>
                            <li>
                                <p>Testing and reporting linguistic, design and functional bugs and issues.</p>
                            </li>
                            <li>
                                <p className="technologies">Jira, Confluence, internal bug tracking tools.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h3 className="title">Education</h3>
                    <p className="job-title">Web Applications Development</p>
                    <p className="subtitle">Technological University Dublin from 2019 to 2020</p>
                    <p className="job-title">UX Design</p>
                    <p className="subtitle">UX Design Institute from 2023 to 2024</p>
                </div>
            </div>
            </StyledAbout>
    )
}

export default About