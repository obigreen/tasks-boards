import {BoardList} from '../list/BoardList';
import './Board.css';
import {useReducer, useState} from "react";
import {v1} from "uuid";
import {CreateForm} from "../../../components/CreateForm.tsx";
import {
    addBoardListAC,
    boardListReducer,
    changeFilterAC,
    deleteBoardListAC,
    updateBoardListTitleAC
} from "../../../model/boardList-reducer.ts";
import {
    addTaskAC,
    changeTaskStatusAC,
    deleleTaskAC,
    taskReducer,
    updateTaskTitleAC
} from "../../../model/task-reduser.ts";


export type FilterProps = "All" | "Active" | "Completed";

export type TasksType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TaskStateType = {
    [key: string]: TasksType[]
}

export type BoardListType = {
    id: string;
    title: string;
    filter: FilterProps
}


export const Board = () => {

    const boardListsId1 = v1();
    const boardListsId2 = v1();

    const [boardLists, dispatchBoardLists] = useReducer(boardListReducer, [
        {id: boardListsId1, title: "First sprint", filter: "All"},
        {id: boardListsId2, title: "Second sprint", filter: "All"},
    ])
    const [tasks, dispatchTasks] = useReducer(taskReducer, {
            [boardListsId1]: [
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
                {id: v1(), title: "...spread", isDone: true}
            ],
            [boardListsId2]: [
                {id: v1(), title: "Props/Types", isDone: true},
                {id: v1(), title: "CRUD Functions for boardLists", isDone: true},
                {id: v1(), title: "Hooks useState, useReducer", isDone: true},
                {id: v1(), title: "onClick, onBlur, onDoubleClick, autoFocus", isDone: true},
                {id: v1(), title: "filter(), map()", isDone: true},
                {id: v1(), title: "uuid", isDone: true},
                {id: v1(), title: "Destructuring", isDone: true},
                {id: v1(), title: "...spread", isDone: true},
                {id: v1(), title: "Tailwind", isDone: true},
                {id: v1(), title: "Reducer, Redux", isDone: true},
                {id: v1(), title: "TDD (Vitest)", isDone: true},
                {id: v1(), title: "ReturnType, typeof(in TS)", isDone: true},
                {id: v1(), title: "as const", isDone: true},
            ]
        }
    )

    // CRUD for boardList ---------
    // create new boardList
    const addBoardList = (newTitle: string) => {
        // переменная, чтобы вызвать addBoardListAC 1 раз, критично в случае создания так как генерируется id через v1()
        const action = addBoardListAC(newTitle)
        dispatchBoardLists(action)
        dispatchTasks(action)
    }

    // delete boardList with into tasks, not mutation
    const deleteBoardList = (boardListId: string) => {
        const action = deleteBoardListAC(boardListId)
        dispatchBoardLists(action)
        dispatchTasks(action)
    }

    // update boardList title
    const updateBoardListTitle = (boardListId: string, newTitle: string) => {
        dispatchBoardLists(updateBoardListTitleAC(boardListId, newTitle))
    }

    // filter tasks group
    const changeFilter = (boardListId: string, filter: FilterProps) => {
        dispatchBoardLists(changeFilterAC(boardListId, filter))
    }
    // CRUD for boardList ---------

    // CRUD for tasks ---------
    // create new task
    const addTask = (boardListId: string, newTitle: string) => {
        dispatchTasks(addTaskAC(boardListId, newTitle))
    }

    // delete task
    const deleteTask = (boardListId: string, taskId: string) => {
        dispatchTasks(deleleTaskAC(boardListId, taskId))
    }

    // update task title
    const updateTaskTitle = (boardListId: string, taskId: string, newTitle: string) => {
        dispatchTasks(updateTaskTitleAC(boardListId, taskId, newTitle))
    }

    //change task status
    const changeTaskStatus = (boardListId: string, taskId: string, isDone: boolean) => {
        dispatchTasks(changeTaskStatusAC(boardListId, taskId, isDone))
    }
    // CRUD for tasks ---------

    return (
        <div className="board">
            {boardLists.map(boardList => {
                    // filter tasks group
                    const boardTasks = tasks[boardList.id]
                    let filteredTasks = boardTasks

                    if (boardList.filter === "Active") {
                        filteredTasks = boardTasks.filter((task) => !task.isDone)
                    }
                    if (boardList.filter === "Completed") {
                        filteredTasks = boardTasks.filter((task) => task.isDone)
                    }

                    return (<BoardList
                            key={boardList.id}
                            boardList={boardList}
                            deleteBoardList={deleteBoardList}
                            tasks={filteredTasks}
                            deleteTask={deleteTask}
                            changeTasksFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeTaskStatus}
                            updateTaskTitle={updateTaskTitle}
                            updateBoardListTitle={updateBoardListTitle}/>
                    )
                }
            )}
            <CreateForm onCreate={addBoardList}/>
        </div>
    )
};
