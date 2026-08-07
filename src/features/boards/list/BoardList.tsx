import './BoardList.css';
import type {FilterProps, TaskProps} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";


type Props = {
    title: string,
    tasks: TaskProps[];
    data?: string; //? - не обязательный тип
    removeTask: (taskId: number) => void;
    changeFilter: (filter: FilterProps) => void;
}


export const BoardList = (props: Props) => {

    const {title, tasks, data, removeTask, changeFilter} = props


    const removeTaskHandler = (taskId: number) => {
        removeTask(taskId);
    }

    return (
        <div className="board-list">
            <h3>{title}</h3>

            <div className="add-task">
                <input/>
                <Button title={"+"} onClick={() => {}}/>
            </div>

            {tasks.length ?
                <ul className="tasks">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone} readOnly/>
                            <span>{task.title}</span>
                            <Button title={"X"} onClick={() => removeTaskHandler(task.id)}/>
                        </li>
                    ))}
                </ul>
                :
                <p className="tasks">not tasks</p>// временный класс для отступа
            }


            <div className="filter-buttons">
                <Button onClick={() => changeFilter("All")} title={"All"}/>
                <Button onClick={() => changeFilter("Active")} title={"Active"}/>
                <Button onClick={() => changeFilter("Completed")} title={"Completed"}/>
            </div>

            <div>{data}</div>
        </div>
    );
};
