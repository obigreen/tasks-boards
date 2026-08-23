import type {BoardListType, FilterProps} from "../features/boards/board/Board.tsx";
import {v1} from "uuid";

const initialState: BoardListType[] = []


export const boardListReducer = (state: BoardListType[] = initialState, action: Actions): BoardListType[] => {
    switch (action.type) {
        case 'delete_boardList': {
            return state.filter(boardList => boardList.id !== action.payload.id)
        }

        case 'add_boardList': {
            const newBoardList: BoardListType = {id: v1(), title: action.payload.title, filter: "All"}
            return [...state, newBoardList]
        }

        case 'update_boardListTitle': {
            return state.map(boardList => boardList.id === action.payload.id ? {...boardList, title: action.payload.title} : boardList)
        }

        case 'change_filter': {
            return state.map(boardList => boardList.id === action.payload.id ? {...boardList, filter: action.payload.filter} : boardList)
        }

        default:
            return state
    }
}

export const deleteBoardListAC = (id: string) => {
    return {
        type: 'delete_boardList',
        payload: {id}
    } as const
}

export const addBoardListAC = (title: string) => {
    return {
        type: 'add_boardList',
        payload: {title}
    } as const
}

export const updateBoardListTitleAC = (id: string, title: string) => {
    return {
        type: 'update_boardListTitle',
        payload: {id, title}
    } as const
}

export const changeFilterAC = (id: string, filter: FilterProps) => {
    return {
        type: 'change_filter',
        payload: { id, filter }
    } as const
}


export type DeleteBoardListAction = ReturnType<typeof deleteBoardListAC>
export type AddBoardListAction = ReturnType<typeof addBoardListAC>
export type UpdateBoardListTitle = ReturnType<typeof updateBoardListTitleAC>
export type ChangeFilter = ReturnType<typeof changeFilterAC>


type Actions = DeleteBoardListAction | AddBoardListAction | UpdateBoardListTitle | ChangeFilter
