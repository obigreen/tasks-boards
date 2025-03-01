import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";

export const SidebarBoards = () => {
    return (
        <SidebarBoardsWrapper>
            <BoardsHeader>
                <BoardsTitle>Boards</BoardsTitle>
                <AddBoardButton>
                    <FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: "20px" }}/>
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
        </SidebarBoardsWrapper>
    );
};


const SidebarBoardsWrapper = styled.div`
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
