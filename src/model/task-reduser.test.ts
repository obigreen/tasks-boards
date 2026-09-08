import {beforeEach, expect, test} from "vitest";
import type {TaskStateType} from "../features/boards/board/Board.tsx";
import {addTaskAC, changeTaskStatusAC, deleleTaskAC, taskReducer, updateTaskTitleAC} from "./task-reduser.ts";
import {addBoardListAC, deleteBoardListAC} from "./boardList-reducer.ts";
import {v1} from "uuid";

// toBe — сравнивает точное значение или ссылку на объект/массив.
// toEqual — сравнивает содержимое массивов или объектов.
// toBeDefined — проверяет, что значение не равно undefined.
// toBeUndefined — проверяет, что значение равно undefined.
// toHaveLength — проверяет длину массива или строки.

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
    expect(endState["boardListId1"]).toBeDefined()
    expect(endState["boardListId2"]).toBeUndefined()
})

test('array should be added boardList', () => {
    const endState = taskReducer(startState, addBoardListAC("New boardList"))
    const keys = Object.keys(endState)
    const newKeys = keys.find(key => key !== "boardListId1" && key !== "boardListId2")
    if (!newKeys) {
        throw Error("New key should be added")
    }
    expect(keys.length).toBe(3)
    expect(endState[newKeys]).toEqual([])
})

test('correct task should be deleted from correct boardList', () => {
    const endState = taskReducer(startState, deleleTaskAC("boardListId1", "3"))
    const deletedTask = endState["boardListId1"].find(task => task.id === "3")
    // expect(endState["boardListId1"].length).toBe(2) - тоже-самое только с toHaveLength
    expect(endState["boardListId1"]).toHaveLength(2)
    // проверяем что удалилась конкретная таска
    expect(deletedTask).toBeUndefined()
    // Сравниваем содержимое измененного стейта с начальным
    expect(endState["boardListId2"]).toEqual(startState["boardListId2"])

    // Избыточная проверка на прямую количества элементов, toEqual гибче
    expect(endState["boardListId2"]).toHaveLength(3)
})

test('correct task should be added from correct boardList', () => {
    const newTitle = "New Task"
    const endState = taskReducer(startState, addTaskAC("boardListId1", newTitle))
    const newTask = endState["boardListId1"].find(task => task.title === newTitle)
    expect(endState["boardListId1"]).toHaveLength(4)
    expect(endState["boardListId2"]).toEqual(startState["boardListId2"])

    // так как find вернет task | undefined
    if (!newTask) {
        throw new Error("New task should be added")
    }

    expect(newTask.title).toBe(newTitle)
    // expect(newTask?.title).toBe(newTitle) - без if проверки
})

test('correct task title should be updated', () => {
    const newTitle = "New Task"
    const endState = taskReducer(startState, updateTaskTitleAC("boardListId1", "3", newTitle))
    const updatedTask = endState["boardListId1"].find(task => task.id === "3")

    const unchangedTasksBefore = startState["boardListId1"].filter(task => task.id !== "3")
    const unchangedTasksAfter = endState["boardListId1"].filter(task => task.id !== "3")

    if (!updatedTask) {
        throw new Error("task should be updated")
    }

    expect(updatedTask.title).toBe(newTitle)
    expect(unchangedTasksBefore).toEqual(unchangedTasksAfter)
    expect(endState["boardListId2"]).toEqual(startState["boardListId2"])
})

test('correct task status should be updated', () => {
    const endState = taskReducer(startState, changeTaskStatusAC("boardListId1", "3", false))
    const changedTaskStatus = endState["boardListId1"].find(task => task.id === "3")
    const changedTasksBefore = startState["boardListId1"].filter(task => task.id !== "3")
    const changedTasksAfter = endState["boardListId1"].filter(task => task.id !== "3")

    if (!changedTaskStatus) {
        throw new Error("task should be updated")
    }

    expect(changedTaskStatus.isDone).toBe(false)
    expect(changedTasksBefore).toEqual(changedTasksAfter)
    expect(endState["boardListId2"]).toEqual(startState["boardListId2"])
})