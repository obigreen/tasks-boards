import './task.css';
import {Button} from "../../../components/Button.tsx";
import type {ChangeEvent} from "react";
import type {BoardListType} from "../board/Board.tsx";


type TaskType = {
    boardId: string
    taskId: string;
    taskTitle: string;
    taskStatus: boolean;
    removeTask: (boardId: string, taskId: string) => void;
    changeTaskStatus: (boardId: string, taskId: string, isDone: boolean) => void;
}

export const Task = (props: TaskType) => {

    const {boardId, taskId, taskTitle, taskStatus, removeTask, changeTaskStatus} = props


    const removeTaskHandler = (boardId: string, taskId: string) => {
        removeTask(boardId, taskId);
    }

    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
        const newStatusValue = event.currentTarget.checked
        changeTaskStatus(boardId, taskId, newStatusValue)
    }


    return (
        <li className={taskStatus ? "isDone" : ""}>
            <span className={taskStatus ? "through" : ""}>{taskTitle}</span>
            <div className="task-actions">
                <input type="checkbox" checked={taskStatus}
                       onChange={(event) => changeTaskStatusHandler(event, taskId)}/>
                <Button title={"X"} onClick={() => removeTaskHandler(boardId, taskId)}/>
            </div>
        </li>
    );
};
