import './BoardList.css';
import type {BoardListType, FilterProps, TasksType} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";
import {Task} from "../task/Task.tsx";
import {CreateForm} from "../../../components/CreateForm.tsx";
import {EditText} from "../../../components/EditText.tsx";

type BoardListProps = {
    boardList: BoardListType;
    deleteBoardList: (boardListId: string) => void;
    updateBoardListTitle: (boardListId: string, newTitle: string) => void
    tasks: TasksType[];
    deleteTask: (boardListId: string, taskId: string) => void;
    changeTasksFilter: (boardListId: string, filter: FilterProps) => void;
    updateTaskTitle: (boardListId: string, taskId: string, newTitle: string) => void
    addTask: (boardListId: string, newTitle: string) => void
    changeTaskStatus: (boardListId: string, taskId: string, isDone: boolean) => void;
    data?: string; //? - не обязательный тип
}


export const BoardList = (props: BoardListProps) => {

    const {boardList: {id, title, filter}, deleteBoardList, updateBoardListTitle, tasks, deleteTask, changeTasksFilter, updateTaskTitle, addTask, changeTaskStatus, data} = props

    // Handlers -------------
    const addTaskHandlers = (newTitle: string) => {
        addTask(id, newTitle)
    }
    const changeFilterHandler = (filter: FilterProps) => {
        changeTasksFilter(id, filter)
    }
    const deleteBoardListHandler = () => {
        deleteBoardList(id)
    }
    const updateBoardListTitleHandler = (newTitle: string) => {
        updateBoardListTitle(id, newTitle)
    }
    // Handlers -------------


    return (
        <div className="board-list">

            <header className="board-list-header">
                <h3>
                    <EditText value={title} onChange={updateBoardListTitleHandler} className={"board-list-title"}/>
                </h3>
                <Button title={"x"} onClick={deleteBoardListHandler}/>
            </header>


            {tasks.length ?
                <ul className="tasks">
                    {tasks.map((task) => (
                        <Task key={task.id}
                              taskId={task.id}
                              taskTitle={task.title}
                              taskStatus={task.isDone}
                              deleteTask={deleteTask}
                              changeTaskStatus={changeTaskStatus}
                              boardListId={id}
                              updateTaskTitle={updateTaskTitle}/>
                    ))}
                </ul>
                :
                <p className="tasks">not tasks</p>// временный класс для отступа
            }

            <div>
                <CreateForm onCreate={addTaskHandlers}/>
            </div>

            <div className="filter-buttons">
                <Button className={filter === "All" ? "active-filter" : ""} onClick={() => changeFilterHandler("All")}
                        title={"All"}/>
                <Button className={filter === "Active" ? "active-filter" : ""} onClick={() => changeFilterHandler("Active")}
                        title={"Active"}/>
                <Button className={filter === "Completed" ? "active-filter" : ""}
                        onClick={() => changeFilterHandler("Completed")} title={"Completed"}/>
            </div>

            <div>{data}</div>
        </div>
    );
};
