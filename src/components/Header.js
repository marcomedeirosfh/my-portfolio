import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from 'gatsby';
import { AppBar, List, ListItem, ListItemIcon } from "@mui/material"
import { styled } from '@mui/system'

const StyledHeader = styled(AppBar)`
    padding: 0.5rem 5rem;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--blue-900);

    .social-links-list {
        display: inherit;
    }

    .my-logo {
        text-decoration: none;
        color: var(--neon-green);
        font-size: 1.5rem;
    }

    @media (max-width: 740px) {
        padding: 0.5rem 1rem;

        .my-logo {
            font-size: 1rem;  
        }

        .social-icon, li {
            width: 24px;
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" className="my-logo">
                <h1>Marco Medeiros</h1>
            </Link>
            <List className="social-links-list">
                <ListItem>
                    <Link to="https://www.linkedin.com/in/marco-medeiros-filho/">
                        <ListItemIcon>
                            <FaLinkedinIn size={36} color="#00F0B4" className="social-icon" />
                        </ListItemIcon>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="https://github.com/marcomedeirosfh">
                        <ListItemIcon>
                            <FaGithub size={36} color="#00F0B4" className="social-icon"/>
                        </ListItemIcon>
                    </Link>
                </ListItem>
            </List>
        </StyledHeader>
    )
}

export default Header 