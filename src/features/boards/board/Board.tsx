import {BoardList} from '../list/BoardList';
import './Board.css';
import {useState} from "react";


export type TaskProps = {
    id: number;
    title: string;
    isDone: boolean;
}



export const Board = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
    ])


    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    return (
        <div className="board">
            <BoardList title={"What to learn"} tasks={tasks} removeTask={removeTask} />
        </div>
    )
};
