import React from 'react';
import {TaskType} from "../board/Board";
import {S} from './BoardList_Styles'

type PropsType = {
    title: string,
    tasks: TaskType[];
}


export const BoardList = ({tasks, title}: PropsType) => {

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.List>
                {tasks.map((task: TaskType) => (
                    <S.Task key={task.id}><span>{task.title}</span></S.Task>
                ))}
            </S.List>
            <S.AddTask>
                <S.Input type="text"/>
                <S.Button>
                    +
                </S.Button>
            </S.AddTask>
        </S.Container>
    );
};



