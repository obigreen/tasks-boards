import {beforeEach, expect, test} from "vitest";
import type {TaskStateType} from "../features/boards/board/Board.tsx";
import {taskReducer} from "./task-reduser.ts";
import {deleteBoardListAC} from "./boardList-reducer.ts";

let startState: TaskStateType = {}


beforeEach(() => {
    startState = {
        boardListId1: [
            {id: "1", title: "Props", isDone: true},
            {id: "2", title: "task", isDone: true},
            {id: "3", title: "useState", isDone: true},
        ],
        boardListId2: [
            {id: "1", title: "Types", isDone: true},
            {id: "2", title: "CRUD", isDone: true},
            {id: "3", title: "Hook", isDone: true},
        ]
    }



})


test('array should be deleted boardList', () => {
    const endState = taskReducer(startState, deleteBoardListAC("boardListId2"))
    const keys = Object.keys(endState)
    expect(keys.length).toBe(1)
    expect(endState["boardListId2"]).not.toBeDefined()
    expect(endState["boardListId2"]).toBeUndefined()
})