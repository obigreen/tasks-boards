import type {TaskStateType} from "../features/boards/board/Board.tsx";
import type {AddBoardListAction, DeleteBoardListAction} from "./boardList-reducer.ts";

const taskState: TaskStateType = {}

export const taskReducer = (state: TaskStateType = taskState, action: Action) => {
    switch (action.type) {
        // board list
        case 'delete_boardList': {
            const newState = {...state}
            delete newState[action.payload.boardListId]
            return newState
        }

        case 'add_boardList': {
            return {...state, [action.payload.id]: []}
        }

        case 'delete-task': {
            return {...state, [action.payload.boardListId]: state[action.payload.boardListId].filter(task => task.id !== action.payload.taskId)}
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

export type deleleTaskType = ReturnType<typeof deleleTaskAC>


type Action = DeleteBoardListAction | AddBoardListAction | deleleTaskType