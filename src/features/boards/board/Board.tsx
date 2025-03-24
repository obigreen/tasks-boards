import {useState} from 'react';
import {BoardList} from '../list/BoardList';
import {S} from './Board_Styles'
import {v1} from "uuid";
import styled from "styled-components";
import {InputComponent} from "../../../components/InputComponent";


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

        [listId1]: [
            {id: v1(), title: 'Верстка figma'},
            {id: v1(), title: 'Выкачка'},
            {id: v1(), title: 'Заменить мокап'},
        ],


        [listId2]: [
            {id: v1(), title: 'Верстка figma'},
            {id: v1(), title: 'Адаптация'},
        ]

    })


    const changeTaskTitle = (listId: string, taskId: string, title: string) => {
        setTasks({...tasks, [listId]: tasks[listId].map(task => task.id === taskId ? {...task, title} : task)});
    }

    //tasks logics
    const removeTask = (listId: string, taskId: string) => {
        setTasks({...tasks, [listId]: tasks[listId].filter(task => task.id !== taskId)})
    }

    const addTask = (listId: string, title: string) => {
        const newTasks = {id: v1(), title};
        setTasks({...tasks, [listId]: [...tasks[listId], newTasks]})
    }


    //todolist logics
    const changeListTitle = (listId: string, title: string) => {
        setLists(lists.map(list => list.id === listId ? {...list, title} : list));
    }


    const removeList = (listId: string) => {
        setLists(lists.filter(task => task.id !== listId))
        delete tasks[listId];
        setTasks({...tasks})
    }

    const addList = (title: string) => {
        const listId = v1()
        const newList: ListsType = {id: listId, title}
        setLists([...lists, newList])
        setTasks({...tasks, [listId]: []})
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
                        removeList={removeList}
                        changeTaskTitle={changeTaskTitle}
                        changeListTitle={changeListTitle}
                    />
                ))}
                <Wrapper>
                    <InputComponent onCrateItem={addList}/>
                </Wrapper>
            </S.Lists>
        </S.Container>
    )
};

const Wrapper = styled.div`

`




