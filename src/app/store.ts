import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {boardListReducer} from "../model/boardList-reducer.ts";
import {taskReducer} from "../model/task-reduser.ts";

const rootReducer = combineReducers({
    boardLists: boardListReducer,
    tasks: taskReducer
})

//! не гибкое решение, учитывает только ограниченное количество типов
// type RootState = {
//     boardList: BoardListType,
//     tasks: TasksType
// }

// ! гибкое решение, возвращает все типы rootReducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: rootReducer
})

