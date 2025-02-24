import React from 'react';
import styled from 'styled-components';
import { TaskCard } from './TaskCard';

type Task = {
    id: number;
    name: string;
};

type List = {
    title: string;
    tasks: Task[];
};

interface TaskListProps {
    list: List;
}

export const TaskList = ({ list }:TaskListProps) => {
    return (
        <TaskListContainer>
            <Title>{list.title}</Title>
            <TasksWrapper>
                {list.tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </TasksWrapper>
        </TaskListContainer>
    );
};

const TaskListContainer = styled.div`
  background: #212121;
  padding: 15px;
  border-radius: 8px;
  min-width: 250px;
  height: max-content;
`;

const Title = styled.h3`
  text-align: left;
  color: white;
  font-weight: 400;
  margin-bottom: 30px;
`;

const TasksWrapper = styled.div`
  margin-top: 10px;
`;


