import {useState} from 'react';
import {BoardList} from '../list/BoardList';
import {S} from './Board_Styles'
import {v1} from "uuid";
import styled from "styled-components";
import {Button} from "../../../components/Button";


export type TaskType = {
    id: string;
    title: string;
}

export const Board = () => {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML&CSS'},
        {id: v1(), title: 'JS'},
        {id: v1(), title: 'ReactJS'},
    ])

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const addTask = (taskTitle: string) => {

        const newTasks = {id: v1(), title: taskTitle};
        setTasks([...tasks, newTasks])
    }


    return (
        <S.Container>
            <S.Lists>
                <BoardList
                    title="Задачи"
                    tasks={tasks}
                    removeTask={removeTask}
                    addTask={addTask}/>
                <Wrapper>
                    <Button>Добавить колонку</Button>
                </Wrapper>
            </S.Lists>
        </S.Container>
    );
}

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




