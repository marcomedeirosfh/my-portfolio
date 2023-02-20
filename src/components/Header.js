import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import logo from "../images/logo.svg"
import { Link } from "gatsby";

const StyledHeader = styled.header`
    padding: 0.5rem;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .nav-links-list {
        display: flex;
        flex-direction: row; 
        list-style: none;
    }

    .nav-link {
        vertical-align: middle;
    }

    .my-logo {
        width: 80px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <nav className="nav-menu">
                <ul className="nav-links-list">
                    <li className="nav-link">
                        <Link to="/">
                            <img className="my-logo" src={logo} alt="Marco's logo" />
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="https://www.linkedin.com/in/marco-medeiros-filho/">
                            <FaLinkedinIn size={36} color="#00F0B4" />
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="https://github.com/marcomedeirosfh">
                            <FaGithub size={36} color="#00F0B4"/>
                        </Link>
                    </li>
                </ul>
            </nav>
            
            
            
        </StyledHeader>
    )
}

export default Header 