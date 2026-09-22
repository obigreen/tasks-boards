import type {BoardListType, FilterProps} from "../features/boards/board/Board.tsx";
import {v1} from "uuid";


export const boardListReducer = (state: BoardListType[] = [], action: Actions): BoardListType[] => {
    switch (action.type) {
        case 'ADD_BOARD_LIST': {
            const newBoardList: BoardListType = {id: action.payload.id, title: action.payload.title, filter: "All"}
            return [...state, newBoardList]
        }

        case 'DELETE_BOARD_LIST': {
            return state.filter(boardList => boardList.id !== action.payload.boardListId)
        }

        case 'UPDATE_BOARD_LIST_TITLE': {
            return state.map(boardList => boardList.id === action.payload.boardListId ? {
                ...boardList,
                title: action.payload.title
            } : boardList)
        }

        case 'CHANGE_BOARD_LIST_FILTER': {
            return state.map(boardList => boardList.id === action.payload.boardListId ? {
                ...boardList,
                filter: action.payload.filter
            } : boardList)
        }

        default: {
            return state;
        }
    }
}

export const addBoardListAC = (title: string) => {
    return {
        type: 'ADD_BOARD_LIST',
        payload: {title, id: v1()}
    } as const
}

export const deleteBoardListAC = (boardListId: string) => {
    return {
        type: 'DELETE_BOARD_LIST',
        payload: {boardListId}
    } as const
}

export const updateBoardListTitleAC = (boardListId: string, title: string) => {
    return {
        type: 'UPDATE_BOARD_LIST_TITLE',
        payload: {boardListId, title}
    } as const
}

export const changeFilterAC = (boardListId: string, filter: FilterProps) => {
    return {
        type: 'CHANGE_BOARD_LIST_FILTER',
        payload: {boardListId, filter}
    } as const
}

export type AddBoardListAction = ReturnType<typeof addBoardListAC>
export type DeleteBoardListAction = ReturnType<typeof deleteBoardListAC>
export type UpdateBoardListTitle = ReturnType<typeof updateBoardListTitleAC>
export type ChangeFilter = ReturnType<typeof changeFilterAC>


type Actions = AddBoardListAction | DeleteBoardListAction | UpdateBoardListTitle | ChangeFilter
