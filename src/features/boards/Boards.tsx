import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

type Board = {
    id: number;
    name: string;
};


export const Boards = () => {

    const boards: Board[] = [
        {id: 1, name: 'Board one'},
    ];

    return (
        <BoardsContainer>
            {boards.map((board) => (
                <BoardCardName key={board.id} to={`/boards/${board.id}`}>
                    {board.name}
                </BoardCardName>
            ))}
        </BoardsContainer>
    );
};


const BoardsContainer = styled.div`
    color: white;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
`;


const BoardCardName = styled(Link)`
    background: #212121;
    padding: 30px;
    border-radius: 8px;
    transition: 0.3s;
    font-size: 30px;
    color: white;
    text-decoration: none;

    &:hover {
        color: #ffba41;
    }
`;

