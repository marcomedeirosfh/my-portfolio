import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from 'gatsby';
import { AppBar, IconButton, List, ListItem, ListItemIcon, styled } from "@mui/material"
import logo from '../images/logo.svg'

const StyledHeader = styled(AppBar)`
    padding: 0.5rem;
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
        width: 150px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" className="logo-button">
                <IconButton>
                    <img src={logo} alt="Marco's logo" className="my-logo"/>
                </IconButton>
            </Link>
            <List className="social-links-list">
                <ListItem>
                    <Link to="https://www.linkedin.com/in/marco-medeiros-filho/">
                        <ListItemIcon>
                            <FaLinkedinIn size={36} color="#00F0B4" />
                        </ListItemIcon>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="https://github.com/marcomedeirosfh">
                        <ListItemIcon>
                            <FaGithub size={36} color="#00F0B4"/>
                        </ListItemIcon>
                    </Link>
                </ListItem>
            </List>
        </StyledHeader>
    )
}

export default Header 