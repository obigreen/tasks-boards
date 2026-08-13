import './task.css';
import {Button} from "../../../components/Button.tsx";
import type {ChangeEvent} from "react";


type TaskType = {
    boardListId: string
    taskId: string;
    taskTitle: string;
    taskStatus: boolean;
    removeTask: (boardListId: string, taskId: string) => void;
    changeTaskStatus: (boardListId: string, taskId: string, isDone: boolean) => void;
}

export const Task = (props: TaskType) => {

    const {boardListId, taskId, taskTitle, taskStatus, removeTask, changeTaskStatus} = props


    const removeTaskHandler = (taskId: string) => {
        removeTask(boardListId, taskId);
    }

    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
        const newStatusValue = event.currentTarget.checked
        changeTaskStatus(boardListId, taskId, newStatusValue)
    }


    return (
        <li className={taskStatus ? "isDone" : ""}>
            <span className={taskStatus ? "through" : ""}>{taskTitle}</span>
            <div className="task-actions">
                <input type="checkbox" checked={taskStatus}
                       onChange={(event) => changeTaskStatusHandler(event, taskId)}/>
                <Button title={"X"} onClick={() => removeTaskHandler(taskId)}/>
            </div>
        </li>
    );
};
