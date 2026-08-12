import {BoardList} from '../list/BoardList';
import './Board.css';
import {useState} from "react";
import {v1} from "uuid";


export type FilterProps = "All" | "Active" | "Completed";

export type TasksType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type BoardListType = {
    id: string;
    title: string;
    filter: FilterProps
}


export const Board = () => {

    const boardListsId1 = v1();
    const boardListsId2 = v1();

    const [boardLists, setBoardLists] = useState<BoardListType[]>([
        {id: boardListsId1, title: "First sprint", filter: "All"},
        {id: boardListsId2, title: "Second sprint", filter: "All"},
    ])


    const [tasks, setTasks] = useState({
            [boardListsId1]: [
                {id: v1(), title: "Props/Types", isDone: true},
                {id: v1(), title: "CRUD Functions for task", isDone: true},
                {id: v1(), title: "Hook useState", isDone: true},
                {id: v1(), title: "onClick, onChange, onKeyUp, onKeyDown, onSubmit", isDone: true},
                {id: v1(), title: "filter(), map(), trim()", isDone: true},
                {id: v1(), title: "uuid", isDone: true},
                {id: v1(), title: "Destructuring", isDone: true},
                {id: v1(), title: "any ? any : any", isDone: true},
                {id: v1(), title: "Dinamic styles", isDone: true},
                {id: v1(), title: "event.currentTarget.any", isDone: true},
                {id: v1(), title: "...spread", isDone: true}
            ],
            [boardListsId2]: [
                {id: v1(), title: "Props/Types", isDone: true},
                {id: v1(), title: "CRUD Functions for task", isDone: true},
                {id: v1(), title: "Hook useState", isDone: true},
                {id: v1(), title: "Destructuring", isDone: true},
            ]
        }
    )

    // filter tasks group
    const changeFilter = (boardId: string, filter: FilterProps) => {
        setBoardLists(boardLists.map(board => board.id === boardId ? {...board, filter} : board))
    }

    //change task status
    const changeTaskStatus = (boardId: string, taskId: string, isDone: boolean) => {
        // setTasks(tasks.map(task => task.id === taskId ? {...task, isDone} : task))
        setTasks({...tasks, [boardId]: tasks[boardId].map(task => task.id === taskId ? {...task, isDone} : task)});
    }

    // delete task
    const removeTask = (boardId: string, taskId: string) => {
        // setTasks(tasks.filter((task) => task.id !== taskId))
        setTasks({...tasks, [boardId]: tasks[boardId].filter((task) => task.id !== taskId)})
    }
    // add task
    const addTask = (boardId: string, newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [boardId]: [...tasks[boardId], newTask]})
    }


    return (
        <div className="board">
            {boardLists.map(board => {


                    // filter tasks group
                    const boardTasks = tasks[board.id]
                    let filteredTasks = boardTasks

                    if (board.filter === "Active") {
                        filteredTasks = boardTasks.filter((task) => !task.isDone)
                    }
                    if (board.filter === "Completed") {
                        filteredTasks = boardTasks.filter((task) => task.isDone)
                    }


                    return (<BoardList
                            key={board.id}
                            boardId={board.id}
                            board={board}
                            title={board.title}
                            tasks={filteredTasks}
                            removeTask={removeTask}
                            changeTasksFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeTaskStatus}/>
                    )
                }
            )}
        </div>
    )
};
