import React from 'react';
import {Link} from "react-router-dom";
import myLogo from "../../assets/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLemon, faUser} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

export const Sidebar = () => {
    return (
        <Aside>
            <Logo>
                <Link to="/boards">
                    <img src={myLogo} alt="My Logo"/>
                </Link>
            </Logo>

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

            <SidebarBoards>
                <BoardsHeader>
                    <BoardsTitle>Boards</BoardsTitle>
                    <AddBoardButton>

                    </AddBoardButton>
                </BoardsHeader>
                <BoardsList>
                    <li>
                        <BoardItem to="/boards/1">
                            <span>First board</span>
                        </BoardItem>
                    </li>
                    <li>
                        <BoardItem to="/boards/2">
                            <span>Second board</span>
                        </BoardItem>
                    </li>
                </BoardsList>
            </SidebarBoards>
        </Aside>
    );
};



const Aside = styled.aside`
    background: #212121;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`;

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

const SidebarBoards = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoardsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const BoardsTitle = styled.h2`
    font-size: 23px;
    font-weight: 400;
    margin: 0;
`;

const AddBoardButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    padding: 0;

    &:hover {
        color: #ffba41;
    }
`;

const BoardsList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const BoardItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 5px 5px 0;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #ffba41;
    }
`;

