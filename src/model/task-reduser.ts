import type {TaskStateType} from "../features/boards/board/Board.tsx";
import type {AddBoardListAction, DeleteBoardListAction} from "./boardList-reducer.ts";
import {v1} from "uuid";


export const taskReducer = (state: TaskStateType = {}, action: Action) => {
    switch (action.type) {
        // board list
        case 'ADD_BOARD_LIST': {
            // создаем сразу пустой массив тасок, чтобы не получить undefined
            return {...state, [action.payload.id]: []}
        }

        case 'DELETE_BOARD_LIST': {
            // копируем стейт в новую переменную
            const newState = {...state}
            // удаляем таски из копии
            delete newState[action.payload.boardListId]
            // возвращаем не мутабельный стейт с удаленными тасками из удаляемого листа тасок
            return newState
        }

        case 'ADD_TASK': {
            const newTask = {id: v1(), title: action.payload.newTitle, isDone: false}
            return {...state, [action.payload.boardListId]: [...state[action.payload.boardListId], newTask]}
        }

        case 'DELETE_TASK': {
            // setTasks(tasks.filter((task) => task.id !== taskId))
            return {...state, [action.payload.boardListId]: state[action.payload.boardListId].filter(task => task.id !== action.payload.taskId)}
        }

        case 'UPDATE_TASK_TITLE': {
            // setTasks(tasks.map(task => task.id === taskId ? {...task, isDone} : task))
            return {...state, [action.payload.boardListId]: state[action.payload.boardListId].map(task => task.id === action.payload.taskId ? {...task, title: action.payload.newTitle} : task)}
        }

        case 'CHANGE_TASK_STATUS': {
            return {...state, [action.payload.boardListId]: state[action.payload.boardListId].map(task => task.id === action.payload.taskId ? {...task, isDone: action.payload.isDone} : task)}
        }

        default: {
            return state;
        }
    }
}

export const addTaskAC = (boardListId: string, newTitle: string) => {
    return {
        type: 'ADD_TASK',
        payload: {boardListId, newTitle}
    } as const
}

export const deleleTaskAC = (boardListId: string, taskId: string) => {
    return {
        type: 'DELETE_TASK',
        payload: {boardListId, taskId}
    } as const
}

export const updateTaskTitleAC = (boardListId: string, taskId: string, newTitle: string) => {
    return {
        type: 'UPDATE_TASK_TITLE',
        payload: {boardListId, taskId, newTitle}
    } as const
}

export const changeTaskStatusAC = (boardListId: string, taskId: string, isDone: boolean) => {
    return {
        type: 'CHANGE_TASK_STATUS',
        payload: {boardListId, taskId, isDone}
    } as const
}

export type deleleTaskType = ReturnType<typeof deleleTaskAC>
export type addTaskType = ReturnType<typeof addTaskAC>
export type updateTaskTitleType = ReturnType<typeof updateTaskTitleAC>
export type changeTaskStatusType = ReturnType<typeof changeTaskStatusAC>


type Action = AddBoardListAction | DeleteBoardListAction | addTaskType | deleleTaskType | updateTaskTitleType | changeTaskStatusType
