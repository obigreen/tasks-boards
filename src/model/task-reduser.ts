import type {TaskStateType} from "../features/boards/board/Board.tsx";


const taskState: TaskStateType = {}

export const taskReducer = (state: TaskStateType = taskState, action: Action) => {
    switch (action.type) {
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


type Action = deleleTaskType