import type {BoardListType} from "../features/boards/board/Board.tsx";

const initialState: BoardListType[] = []


export const boardListReducer = (state: BoardListType[] = initialState, action: Actions): BoardListType[] => {
    switch (action.type) {
        case 'delete_boardList': {
            return state
        }

        case 'add_boardList': {
            return state
        }

        default:
            return state
    }
}


type Actions = {
    type: string,
    payload: any
}