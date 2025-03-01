import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TaskList } from '../tasks/TaskList';

type Task = {
    id: number;
    name: string;
};

type List = {
    id: number;
    title: string;
    tasks: Task[];
};

type BoardData = {
    id: number;
    name: string;
    lists: List[];
};

interface BoardViewProps {
    setBoardName: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardView = ({setBoardName}:BoardViewProps) => {
    const { id } = useParams<{ id: string }>();
    const [board, setBoard] = useState<BoardData | null>(null);

    const boards: BoardData[] = [
        {
            id: 1,
            name: 'First board',
            lists: [
                {
                    id: 1,
                    title: 'need',
                    tasks: [
                        { id: 11, name: 'Задача 1' },
                        { id: 12, name: 'Задача 2' },
                    ],
                },
                {
                    id: 2,
                    title: 'ready',
                    tasks: [{ id: 21, name: 'Задача 1' }],
                },
                {
                    id: 3,
                    title: 'test',
                    tasks: [{ id: 21, name: 'Задача 1' }],
                },
                {
                    id: 4,
                    title: 'test',
                    tasks: [{ id: 21, name: 'Задача 1' }],
                },
                {
                    id: 5,
                    title: 'test',
                    tasks: [{ id: 21, name: 'Задача 1' }],
                },
                {
                    id: 6,
                    title: 'test',
                    tasks: [{ id: 21, name: 'Задача 1' }],
                },
                {
                    id: 7,
                    title: 'test',
                    tasks: [{ id: 21, name: 'Задача 1' }],
                },
            ],
        },
        {
            id: 2,
            name: 'Second board',
            lists: [
                {
                    id: 3,
                    title: 'Апрув',
                    tasks: [
                        { id: 31, name: 'Задача 1' },
                        { id: 32, name: 'Задача 2' },
                        { id: 33, name: 'Задача 3' },
                    ],
                },
                {
                    id: 4,
                    title: 'Тест',
                    tasks: [
                        { id: 41, name: 'Тест-задача 1' },
                        { id: 42, name: 'Тест-задача 2' },
                    ],
                },
            ],
        },
    ];

    useEffect(() => {
        if (id) {
            const boardId = Number(id);
            const foundBoard = boards.find((b) => b.id === boardId) || null;
            setBoard(foundBoard);
        }
    }, [id]);

    useEffect(() => {
        if (board) {
            setBoardName(board.name);
        } else {
            setBoardName('');
        }
    }, [board, setBoardName]);

    return (
        <BoardContainer>
            <BoardViewWrapper>
                {board && (
                    <Lists>
                        {board.lists.map((list) => (
                            <TaskList key={list.id} list={list} />
                        ))}
                    </Lists>
                )}
            </BoardViewWrapper>
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;


const BoardViewWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
    height: 100vh;
`;

const Lists = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    overflow-x: auto;
    height: 100%;
`;



