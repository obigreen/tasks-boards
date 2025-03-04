import {useState} from 'react';
import {BoardList} from '../list/BoardList';
import {S} from './Board_Styles'


export type TaskType = {
    id: number;
    title: string;
}

export const Board = () => {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS'},
        {id: 2, title: 'JS'},
        {id: 3, title: 'ReactJS'},
    ])


    return (
        <S.Container>
            <S.Lists>
                <BoardList
                    title="List one"
                    tasks={tasks}/>
            </S.Lists>
        </S.Container>
    );
}




