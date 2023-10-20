import React from "react"
import { AppBar, List, ListItem, ListItemButton, ButtonBase } from "@mui/material"
import { styled } from '@mui/system'

const StyledHeader = styled(AppBar)`
    padding: 1rem 5rem;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--blue-900);
    border-bottom: 1px solid var(--blue-100);
    box-shadow: none;
    &:hover {
        border-bottom: 1px solid var(--green-100);
        transition: 700ms;
    }


    .my-logo {
        text-decoration: none;
        color: var(--blue-100);
        font-size: 2rem;
        font-weight: 400;
        &:hover {
            color: var(--green-100);
            transition: 700ms;
        }
    }

    h1 {
        font-weight: 500;
    }

    .menu-button {
        font-size: 16px;
        color: var(--blue-100);
        &:hover {
            color: var(--green-100);
        }
    }

    @media (max-width: 740px) {
        padding: 0.5rem 1rem;

        .my-logo {
            font-size: 1.2rem;
        }
    }
`

const Header = ({setView}) => {
    return (
        <StyledHeader>
            <ButtonBase onClick={() => setView('hero')}>
                <h1 className="my-logo">Marco Medeiros</h1>
            </ButtonBase>
            <List>
                <ListItem>
                    <ListItemButton className="menu-button" onClick={() => setView('about')}>
                        About
                    </ListItemButton>
                </ListItem>
            </List>
        </StyledHeader>
    )
}

export default Header 