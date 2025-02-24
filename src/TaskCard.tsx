import React from 'react';
import styled from 'styled-components';

type Task = {
    id: number;
    name: string;
};

type TaskCardProps = {
    task: Task;
};


export const TaskCard = ({ task }: TaskCardProps) => {
    return <TaskCardContainer>{task.name}</TaskCardContainer>;
};



const TaskCardContainer = styled.div`
  background: white;
  font-weight: 100;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
`;



