import './BoardList.css';
import type {FilterProps, TaskProps} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";
import {type ChangeEvent, type SubmitEvent, useState} from "react";

type Props = {
    title: string,
    tasks: TaskProps[];
    data?: string; //? - не обязательный тип
    removeTask: (taskId: string) => void;
    changeFilter: (filter: FilterProps) => void;
    addTask: (newTitle: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void;
    filter: FilterProps
}


export const BoardList = (props: Props) => {

    const {title, tasks, data, removeTask, changeFilter, addTask, changeStatus, filter} = props
    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)


    // Handlers -------------
    const taskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(null)
    }

    const removeTaskHandler = (taskId: string) => {
        removeTask(taskId);
    }

    const addTaskHandler = (newTitle: string) => {
        const trimmenTitle = taskTitle.trim();
        if (trimmenTitle !== "") {
            addTask(newTitle)
            setTaskTitle("")
        } else {
            setError("Введите корректное название")
        }
    }

    // ----------===
    // Клик по submit-кнопке и нажатие Enter в input приводят к одному событию submit формы.
    const addTaskSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        addTaskHandler(taskTitle)
        event.preventDefault()
    }

    // Отдельный onKeyDown/onKeyUp здесь не нужен: при нажатии Enter keyboard handler
    // вызовет addTaskHandler, а затем стандартный submit формы вызовет его повторно.
    // preventDefault в submit handler отменяет стандартную перезагрузку/переход страницы.
    // const addTaskKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //         addTaskHandler(taskTitle)
    //     }
    // }
    // ----------===

    const changeStatusHandler = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
        const newStatusValue = event.currentTarget.checked
        changeStatus(taskId, newStatusValue)
    }

    // Handlers -------------


    return (
        <div className="board-list">
            <h3>{title}</h3>

            <div>
                <form className={`add-task ${error ? "error" : ""}`} onSubmit={addTaskSubmitHandler}>
                    <input type={"text"}
                           value={taskTitle}
                           onChange={taskTitleHandler}/>
                    <Button title={"+"}/>
                </form>

                {error && <span className={"error-message"}>{error}</span>}
            </div>

            {tasks.length ?
                <ul className="tasks">
                    {tasks.map((task) => (
                        <li key={task.id} className={task.isDone ? "isDone" : ""}>
                            <input type="checkbox"
                                   checked={task.isDone}
                                   onChange={(event) => changeStatusHandler(event, task.id)}/>
                            <span className={task.isDone ? "through" : ""}>{task.title}</span>
                            <Button title={"X"} onClick={() => removeTaskHandler(task.id)}/>
                        </li>
                    ))}
                </ul>
                :
                <p className="tasks">not tasks</p>// временный класс для отступа
            }


            <div className="filter-buttons">
                <Button className={filter === "All" ? "active-filter" : ""} onClick={() => changeFilter("All")} title={"All"}/>
                <Button className={filter === "Active" ? "active-filter" : ""} onClick={() => changeFilter("Active")} title={"Active"}/>
                <Button className={filter === "Completed" ? "active-filter" : ""} onClick={() => changeFilter("Completed")} title={"Completed"}/>
            </div>

            <div>{data}</div>
        </div>
    );
};
