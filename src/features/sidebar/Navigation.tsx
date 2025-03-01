import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLemon, faUser} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <NavList>
                <li>
                    <NavItem to="/boards">
                        <FontAwesomeIcon icon={faLemon}/>
                        <span>Boards</span>
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/members">
                        <FontAwesomeIcon icon={faUser}/>
                        <span>Members</span>
                    </NavItem>
                </li>
            </NavList>
        </nav>
    );
};

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 5px 5px 0;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    span {
        display: block;
        margin-top: 2px;
        font-size: 20px;
    }

    &:hover {
        color: #ffba41;
    }
`;