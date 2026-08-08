import {BoardList} from '../list/BoardList';
import './Board.css';
import {useState} from "react";
import {v1} from "uuid";


export type TasksType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type FilterProps = "All" | "Active" | "Completed";


export const Board = () => {

    const [statusFilter, setStatusFilter] = useState<FilterProps>("All");
    const [tasks, setTasks] = useState([
        {id: v1(), title: "Props/Types", isDone: true},
        {id: v1(), title: "CRUD Functions for task", isDone: true},
        {id: v1(), title: "Hook useState", isDone: true},
        {id: v1(), title: "onClick, onChange, onKeyUp, onKeyDown, onSubmit", isDone: true},
        {id: v1(), title: "filter(), map(), trim()", isDone: true},
        {id: v1(), title: "uuid", isDone: true},
        {id: v1(), title: "Destructuring", isDone: true},
        {id: v1(), title: "any ? any : any", isDone: true},
        {id: v1(), title: "Dinamic styles", isDone: true},
        {id: v1(), title: "event.currentTarget.any", isDone: true},
        {id: v1(), title: "...spread", isDone: true},
    ])

    // filter tasks group
    let filteredTasks = tasks
    if (statusFilter === "Active") {
        filteredTasks = tasks.filter((task) => !task.isDone)
    }
    if (statusFilter === "Completed") {
        filteredTasks = tasks.filter((task) => task.isDone)
    }
    const changeTasksFilter = (filter: FilterProps) => {
        setStatusFilter(filter)
    }

    //change task status
    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, isDone } : task))
    }

    // delete task
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }
    // add task
    const addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([...tasks, newTask])
    }


    return (
        <div className="board">
            <BoardList
                title={"First sprint"}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeTasksFilter={changeTasksFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filter={statusFilter}/>
        </div>
    )
};
