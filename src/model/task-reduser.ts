import type {TaskStateType} from "../features/boards/board/Board.tsx";
import type {AddBoardListAction, DeleteBoardListAction} from "./boardList-reducer.ts";
import {v1} from "uuid";

const taskState: TaskStateType = {}

export const taskReducer = (state: TaskStateType = taskState, action: Action) => {
    switch (action.type) {
        // board list
        case 'delete_boardList': {
            // копируем стейт в новую переменную
            const newState = {...state}
            // удаляем таски из копии
            delete newState[action.payload.boardListId]
            // возвращаем не мутабельный стейт с удаленными тасками из удаляемого листа тасок
            return newState
        }

        case 'add_boardList': {
            // создаем сразу пустой массив тасок, чтобы не получить undefined
            return {...state, [action.payload.id]: []}
        }

        case 'delete-task': {
            return {...state, [action.payload.boardListId]: state[action.payload.boardListId].filter(task => task.id !== action.payload.taskId)}
        }

        case 'add_task': {
            const newTask = {id: v1(), title: action.payload.newTitle, isDone: false}
            return {...state, [action.payload.boardListId]: [...state[action.payload.boardListId], newTask]}
        }

        default: {
            return state
        }
    }
}


export const deleleTaskAC = (boardListId: string, taskId: string) => {
    return {
        type: 'delete-task',
        payload: {boardListId, taskId}
    } as const
}

export const addTaskAC = (boardListId: string, newTitle: string) => {
    return {
        type: 'add_task',
        payload: {boardListId, newTitle}
    } as const
}

export type deleleTaskType = ReturnType<typeof deleleTaskAC>
export type addTaskType = ReturnType<typeof addTaskAC>


type Action = DeleteBoardListAction | AddBoardListAction | deleleTaskType | addTaskType