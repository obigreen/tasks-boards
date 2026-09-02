import type {BoardListType, FilterProps} from "../features/boards/board/Board.tsx";
import {v1} from "uuid";

const initialState: BoardListType[] = []


export const boardListReducer = (state: BoardListType[] = initialState, action: Actions): BoardListType[] => {
    switch (action.type) {
        case 'delete_boardList': {
            return state.filter(boardList => boardList.id !== action.payload.boardListId)
        }

        case 'add_boardList': {
            const newBoardList: BoardListType = {id: action.payload.id, title: action.payload.title, filter: "All"}
            return [...state, newBoardList]
        }

        case 'update_boardListTitle': {
            return state.map(boardList => boardList.id === action.payload.boardListId ? {...boardList, title: action.payload.title} : boardList)
        }

        case 'change_filter': {
            return state.map(boardList => boardList.id === action.payload.boardListId ? {...boardList, filter: action.payload.filter} : boardList)
        }

        default:
            return state
    }
}

export const deleteBoardListAC = (boardListId: string) => {
    return {
        type: 'delete_boardList',
        payload: {boardListId}
    } as const
}

export const addBoardListAC = (title: string) => {
    return {
        type: 'add_boardList',
        payload: {title, id: v1()}
    } as const
}

export const updateBoardListTitleAC = (boardListId: string, title: string) => {
    return {
        type: 'update_boardListTitle',
        payload: {boardListId, title}
    } as const
}

export const changeFilterAC = (boardListId: string, filter: FilterProps) => {
    return {
        type: 'change_filter',
        payload: { boardListId, filter }
    } as const
}


export type DeleteBoardListAction = ReturnType<typeof deleteBoardListAC>
export type AddBoardListAction = ReturnType<typeof addBoardListAC>
export type UpdateBoardListTitle = ReturnType<typeof updateBoardListTitleAC>
export type ChangeFilter = ReturnType<typeof changeFilterAC>


type Actions = DeleteBoardListAction | AddBoardListAction | UpdateBoardListTitle | ChangeFilter
