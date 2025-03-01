import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Board = {
    id: number;
    name: string;
};

interface BoardsProps {
    setBoardName: (name: string) => void;
}

export const Boards = ({ setBoardName }: BoardsProps) => {
    const boards: Board[] = [
        { id: 1, name: 'Board one' },
    ];

    useEffect(() => {
        setBoardName('Boards');
    }, [setBoardName]);

    return (
        <BoardsContainer>
            <BoardsDiv>
                {boards.map((board) => (
                    <BoardCard key={board.id} to={`/boards/${board.id}`}>
                        {board.name}
                    </BoardCard>
                ))}
            </BoardsDiv>
        </BoardsContainer>
    );
};




const BoardsContainer = styled.div`
  color: white;
`;

const BoardsDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
`;

const BoardCard = styled(Link)`
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

