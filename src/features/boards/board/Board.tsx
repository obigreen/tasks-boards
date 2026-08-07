import {BoardList} from '../list/BoardList';
import './Board.css';
import {useState} from "react";
import {v1} from "uuid";


export type TaskProps = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterProps = "All" | "Active" | "Completed";


export const Board = () => {

    const [statusFilter, setStatusFilter] = useState<FilterProps>("All");
    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
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
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }


    return (
        <div className="board">
            <BoardList
                title={"What to learn"}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}/>
        </div>
    )
};
