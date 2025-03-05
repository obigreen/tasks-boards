import {useState} from 'react';
import {BoardList} from '../list/BoardList';
import {S} from './Board_Styles'
import {v1} from "uuid";
import styled from "styled-components";
import {Button} from "../../../components/Button";


export type ListsType = {
    id: string
    title: string
}

export type TaskType = {
    id: string;
    title: string;
}


export type ListType = {
    [key: string]: TaskType[]
}

export const Board = () => {


    const listId1 = v1();
    const listId2 = v1();

    const [lists, setLists] = useState<ListsType[]>([
        {id: listId1, title: 'Задачи'},
        {id: listId2, title: 'Тестирование'},
    ])

    const [tasks, setTasks] = useState<ListType>({

        [listId1] : [
            {id: v1(), title: 'HTML&CSS'},
            {id: v1(), title: 'JS'},
            {id: v1(), title: 'ReactJS'},
        ],


        [listId2] : [
            {id: v1(), title: 'CSS'},
            {id: v1(), title: 'CSS'},
        ]


    })

    const removeTask = (listId: string, taskId: string) => {
        setTasks({...tasks, [listId]: tasks[listId].filter(task => task.id !== taskId)})
    }

    const addTask = (listId: string, taskTitle: string) => {
        const newTasks = {id: v1(), title: taskTitle};
        setTasks({...tasks, [listId]: [...tasks[listId], newTasks]})
    }


    return (
        <S.Container>
            <S.Lists>
                {lists.map((list: ListsType) => (
                    <BoardList
                        key={list.id}
                        list={list}
                        title={list.title}
                        tasks={tasks[list.id]}
                        removeTask={removeTask}
                        addTask={addTask}
                    />
                ))}
                <Wrapper>
                    <Button>Добавить колонку</Button>
                </Wrapper>
            </S.Lists>
        </S.Container>
    )
};

const Wrapper = styled.div`

    button {
        background-color: #212121;
        min-width: 250px;
        opacity: 0.7;
        padding: 15px;
        font-size: 20px;
        cursor: pointer;
    }
`




