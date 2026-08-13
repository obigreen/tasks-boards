import './BoardList.css';
import type {BoardListType, FilterProps, TasksType} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";
import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {Task} from "../task/Task.tsx";
import {CreateForm} from "../../../components/CreateForm.tsx";

type BoardListProps = {
    boardList: BoardListType;
    removeBoardList: (boardListId: string) => void;
    tasks: TasksType[];
    removeTask: (boardListId: string, taskId: string) => void;
    changeTasksFilter: (boardListId: string, filter: FilterProps) => void;
    addTask: (boardListId: string, newTitle: string) => void
    changeTaskStatus: (boardListId: string, taskId: string, isDone: boolean) => void;
    data?: string; //? - не обязательный тип
}


export const BoardList = (props: BoardListProps) => {

    const {boardList: {id, title, filter}, removeBoardList, tasks, removeTask, changeTasksFilter, addTask, changeTaskStatus, data} = props



    // Handlers -------------

    const addTaskHandlers = () => {
        addTask(id, title)
    }

    const changeFilterHandler = (filter: FilterProps) => {
        changeTasksFilter(id, filter)
    }

    const removeBoardListHandler = () => {
        removeBoardList(id)
    }

    // Handlers -------------


    return (
        <div className="board-list">


            <header className="board-list-header">
                <h3>{title}</h3>
                <Button title={"x"} onClick={removeBoardListHandler}/>
            </header>


            {tasks.length ?
                <ul className="tasks">
                    {tasks.map((task) => (
                        <Task key={task.id}
                              taskId={task.id}
                              taskTitle={task.title}
                              taskStatus={task.isDone}
                              removeTask={removeTask}
                              changeTaskStatus={changeTaskStatus}
                              boardListId={id}/>
                    ))}
                </ul>
                :
                <p className="tasks">not tasks</p>// временный класс для отступа
            }

            <div>
                <CreateForm onCreate={addTaskHandlers}/>
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
