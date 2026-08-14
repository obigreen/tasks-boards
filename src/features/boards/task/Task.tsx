import './task.css';
import {Button} from "../../../components/Button.tsx";
import type {ChangeEvent} from "react";
import {EditText} from "../../../components/EditText.tsx";


type TaskType = {
    boardListId: string
    taskId: string;
    taskTitle: string;
    taskStatus: boolean;
    removeTask: (boardListId: string, taskId: string) => void;
    changeTaskStatus: (boardListId: string, taskId: string, isDone: boolean) => void;
    updateTaskTitle: (boardListId: string, taskId: string, newTitle: string) => void;
}

export const Task = (props: TaskType) => {

    const {boardListId, taskId, taskTitle, taskStatus, removeTask, changeTaskStatus, updateTaskTitle} = props

    // Handlers -------------
    const removeTaskHandler = (taskId: string) => {
        removeTask(boardListId, taskId);
    }
    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
        const newStatusValue = event.currentTarget.checked
        changeTaskStatus(boardListId, taskId, newStatusValue)
    }
    const updateTaskTitleHandler = (newTitle: string) => {
        updateTaskTitle(boardListId, taskId, newTitle)
    }
    // Handlers -------------

    return (
        <li className={taskStatus ? "isDone" : ""}>
            <EditText value={taskTitle} className={taskStatus ? "through" : ""} onChange={updateTaskTitleHandler}/>
            <div className="task-actions">
                <input type="checkbox" checked={taskStatus}
                       onChange={(event) => changeTaskStatusHandler(event, taskId)}/>
                <Button title={"X"} onClick={() => removeTaskHandler(taskId)}/>
            </div>
        </li>
    );
};
