import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {boardListReducer} from "./boardList-reducer.ts";
import {taskReducer} from "./task-reduser.ts";

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
type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer
})

