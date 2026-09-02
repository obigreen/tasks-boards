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


    const [tasks, setTasks] = useState<TaskStateType>({
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
    // filter tasks group
    const changeFilter = (boardListId: string, filter: FilterProps) => {
        dispatchBoardLists(changeFilterAC(boardListId, filter))
    }
    // delete boardList with into tasks, not mutation
    const deleteBoardList = (boardListId: string) => {
        dispatchBoardLists(deleteBoardListAC(boardListId))
        const updatedTask = {...tasks}
        delete updatedTask[boardListId]
        setTasks(updatedTask)
    }
    // create new boardList
    const addBoardList = (newTitle: string) => {
        const action = addBoardListAC(newTitle)
        dispatchBoardLists(action)
        setTasks({...tasks, [action.payload.id]: []})
    }
    // update boardList title
    const updateBoardListTitle = (boardListId: string, newTitle: string) => {
        dispatchBoardLists(updateBoardListTitleAC(boardListId, newTitle))
    }
    // CRUD for boardList ---------

    // CRUD for tasks ---------
    //change task status
    const changeTaskStatus = (boardListId: string, taskId: string, isDone: boolean) => {
        // setTasks(tasks.map(task => task.id === taskId ? {...task, isDone} : task))
        setTasks({
            ...tasks,
            [boardListId]: tasks[boardListId].map(task => task.id === taskId ? {...task, isDone} : task)
        });
    }
    // delete task
    const deleteTask = (boardListId: string, taskId: string) => {
        // setTasks(tasks.filter((task) => task.id !== taskId))
        setTasks({...tasks, [boardListId]: tasks[boardListId].filter((task) => task.id !== taskId)})
    }
    // create new task
    const addTask = (boardListId: string, newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [boardListId]: [...tasks[boardListId], newTask]})
    }
    // update task title
    const updateTaskTitle = (boardListId: string, taskId: string, newTitle: string) => {
        setTasks({...tasks, [boardListId]: tasks[boardListId].map(task => task.id === taskId ? {...task, title: newTitle} : task)})
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
