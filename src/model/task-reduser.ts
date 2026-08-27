import type {TaskStateType} from "../features/boards/board/Board.tsx";


const taskState: TaskStateType[] = []

export const taskReducer = (state: TaskStateType[] = taskState, action: Action) => {
    switch (action.type) {
        case 'delete-task': {
            return state
        }

        default: {
            return state
        }
    }
}


export const deteleTaskAC = (boardListId: string, taskId: string) => {
    return {
        type: 'delete-task',
        payload: {boardListId, taskId}
    } as const
}

export type deteleTaskType = ReturnType<typeof deteleTaskAC>


type Action = deteleTaskType