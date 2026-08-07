import {BoardList} from '../list/BoardList';
import './Board.css';
import {useState} from "react";


export type TaskProps = {
    id: number;
    title: string;
    isDone: boolean;
}

export type FilterProps = "All" | "Active" | "Completed";


export const Board = () => {

    const [statusFilter, setStatusFilter] = useState<FilterProps>("All");
    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])

    // filter
    let filteredTasks = tasks
    if (statusFilter === "Active") {
        filteredTasks = tasks.filter((task) => !task.isDone)
    }
    if (statusFilter === "Completed") {
        filteredTasks = tasks.filter((task) => task.isDone)
    }
    const changeFilter = (filter: FilterProps) => {
        setStatusFilter(filter)
    }

    // delete
    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }


    return (
        <div className="board">
            <BoardList
                title={"What to learn"}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}/>
        </div>
    )
};
