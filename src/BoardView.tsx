import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TaskList } from './TaskList';

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
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    // Добавили проп, чтобы передавать имя доски в App
    setBoardName: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardView: React.FC<BoardViewProps> = ({
                                                        isSidebarOpen,
                                                        toggleSidebar,
                                                        setBoardName,
                                                    }) => {
    const { id } = useParams<{ id: string }>();
    const [board, setBoard] = useState<BoardData | null>(null);

    const boards: BoardData[] = [
        {
            id: 1,
            name: 'First board',
            lists: [
                {
                    id: 1,
                    title: 'Нужно сделать',
                    tasks: [
                        { id: 11, name: 'Задача 1' },
                        { id: 12, name: 'Задача 2' },
                    ],
                },
                {
                    id: 2,
                    title: 'В процессе',
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

    // После того как board обновится — отправляем его имя в App
    useEffect(() => {
        if (board) {
            setBoardName(board.name);
        } else {
            // Если доски нет, сбрасываем имя, чтобы не оставалось старое
            setBoardName('');
        }
    }, [board, setBoardName]);

    return (
        <BoardContainer>
            <BoardViewWrapper>
                {/* Убрали <h2> с названием доски, теперь всё уезжает в App */}
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

// Стили не менялись, поэтому не повторяем их заново.



const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;


const BoardViewWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Lists = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  height: 100%;
`;



