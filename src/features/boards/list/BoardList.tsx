import './BoardList.css';
import type {BoardListType, FilterProps, TasksType} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";
import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {Task} from "../task/Task.tsx";

type BoardListProps = {
    board: BoardListType;
    tasks: TasksType[];
    title: string;
    removeTask: (boardId: string, taskId: string) => void;
    changeTasksFilter: (boardId: string, filter: FilterProps) => void;
    addTask: (boardId: string, newTitle: string) => void
    changeTaskStatus: (boardId: string, taskId: string, isDone: boolean) => void;
    data?: string; //? - не обязательный тип
}


export const BoardList = (props: BoardListProps) => {

    const {board: {id, title, filter}, tasks, data, removeTask, changeTasksFilter, addTask, changeTaskStatus} = props
    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)


    // Handlers -------------
    const taskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(null)
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


    const addTaskHandler = (newTitle: string) => {
        const trimmenTitle = newTitle.trim()
        if (trimmenTitle !== "") {
            addTask(id, trimmenTitle)
            setTaskTitle("")
        } else {
            setError("Введите корректное название")
        }
    }

    const changeFilterHandler = (filter: FilterProps) => {
        changeTasksFilter(id, filter)
    }


    // Handlers -------------


    return (
        <div className="board-list">
            <h3>{title}</h3>

            {tasks.length ?
                <ul className="tasks">
                    {tasks.map((task) => (
                        <Task key={task.id}
                              taskId={task.id}
                              taskTitle={task.title}
                              taskStatus={task.isDone}
                              removeTask={removeTask}
                              changeTaskStatus={changeTaskStatus}/>
                    ))}
                </ul>
                :
                <p className="tasks">not tasks</p>// временный класс для отступа
            }

            <div>
                <form className={`add-task ${error ? "error" : ""}`} onSubmit={addTaskSubmitHandler}>
                    <input type={"text"}
                           value={taskTitle}
                           onChange={taskTitleHandler}/>
                    <Button title={"+"}/>
                </form>

                {error && <span className={"error-message"}>{error}</span>}
            </div>


            <div className="filter-buttons">
                <Button className={filter === "All" ? "active-filter" : ""} onClick={() => changeFilterHandler("All")}
                        title={"All"}/>
                <Button className={filter === "Active" ? "active-filter" : ""} onClick={() => changeFilterHandler("Active")}
                        title={"Active"}/>
                <Button className={filter === "Completed" ? "active-filter" : ""}
                        onClick={() => changeFilterHandler("Completed")} title={"Completed"}/>
            </div>

            <div>{data}</div>
        </div>
    );
};
