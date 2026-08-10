import './task.css';
import {Button} from "../../../components/Button.tsx";
import type {ChangeEvent} from "react";


type TaskType = {
    taskId: string;
    taskTitle: string;
    taskStatus: boolean;
    removeTask: (taskId: string) => void;
    changeTaskStatus: (taskId: string, isDone: boolean) => void;
}

export const Task = (props: TaskType) => {

    const {taskId, taskTitle, taskStatus, removeTask, changeTaskStatus} = props


    const removeTaskHandler = (taskId: string) => {
        removeTask(taskId);
    }

    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
        const newStatusValue = event.currentTarget.checked
        changeTaskStatus(taskId, newStatusValue)
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
