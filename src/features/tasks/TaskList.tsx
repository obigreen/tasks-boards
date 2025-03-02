import React, {useState} from 'react';
import styled from 'styled-components';
import {TaskCard} from './TaskCard';



export const TaskList = () => {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])


    return (
        <TaskListContainer>
            <Title>Task list</Title>
            <TasksWrapper>
                <TaskCard/>
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


