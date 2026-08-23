import {beforeEach, expect, test} from "vitest";
import {v1} from "uuid";
import type {BoardListType, FilterProps} from "../features/boards/board/Board.tsx";
import {
    addBoardListAC,
    boardListReducer,
    changeFilterAC,
    deleteBoardListAC,
    updateBoardListTitleAC
} from "./boardList-reducer.ts";

let boardListsId1: string;
let boardListsId2: string;
let startState: BoardListType[]

beforeEach(() => {
    boardListsId1 = v1();
    boardListsId2 = v1();

    startState = [
        {id: boardListsId1, title: "First sprint", filter: "All"},
        {id: boardListsId2, title: "Second sprint", filter: "All"},
    ]

})



test('correct boardLists should be deleted', () => {
    const endState = boardListReducer(startState, deleteBoardListAC(boardListsId1));
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(boardListsId2);
})

test('correct boardLists should be added', () => {
    const title = "New list"
    const endState = boardListReducer(startState, addBoardListAC(title));
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(title);
})


test('correct boardLists updated title', () => {
    const updatedTitle = "New title"
    const stateTitle = startState[1].title
    const endState = boardListReducer(startState, updateBoardListTitleAC(boardListsId1, updatedTitle));
    expect(endState[0].title).toBe(updatedTitle);
    expect(endState[1].title).toBe(stateTitle)
})

test('correct boardLists updated filter', () => {
    const updatedFilter: FilterProps = "Completed"
    const stateFilter = startState[1].filter
    const endState = boardListReducer(startState, changeFilterAC(boardListsId1, updatedFilter));
    expect(endState[0].filter).toBe(updatedFilter);
    expect(endState[1].filter).toBe(stateFilter)
})