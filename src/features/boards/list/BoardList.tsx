import './BoardList.css';
import type {FilterProps, TaskProps} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";
import {type ChangeEvent, useState} from "react";
import * as React from "react";


type Props = {
    title: string,
    tasks: TaskProps[];
    data?: string; //? - не обязательный тип
    removeTask: (taskId: string) => void;
    changeFilter: (filter: FilterProps) => void;
    addTask: (newTitle: string) => void
}


export const BoardList = (props: Props) => {

    const {title, tasks, data, removeTask, changeFilter, addTask} = props


    const [taskTitle, setTaskTitle] = useState("")
    const taskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }


    const removeTaskHandler = (taskId: string) => {
        removeTask(taskId);
    }

    const addTaskHandler = (newTitle: string) => {
        addTask(newTitle.trim())
        setTaskTitle("")
    }

    const addTaskKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler(taskTitle)
        }
    }


    return (
        <div className="board-list">
            <h3>{title}</h3>

            <div className="add-task">
                <input type={"text"}
                       value={taskTitle}
                       onChange={taskTitleHandler}
                       onKeyUp={addTaskKeyboard}/>
                <Button title={"+"} onClick={() => {addTaskHandler(taskTitle)}}/>
            </div>

            {tasks.length ?
                <ul className="tasks">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone} readOnly/>
                            <span>{task.title}</span>
                            <Button title={"X"} onClick={() => removeTaskHandler(task.id)}/>
                        </li>
                    ))}
                </ul>
                :
                <p className="tasks">not tasks</p>// временный класс для отступа
            }


            <div className="filter-buttons">
                <Button onClick={() => changeFilter("All")} title={"All"}/>
                <Button onClick={() => changeFilter("Active")} title={"Active"}/>
                <Button onClick={() => changeFilter("Completed")} title={"Completed"}/>
            </div>

            <div>{data}</div>
        </div>
    );
};
