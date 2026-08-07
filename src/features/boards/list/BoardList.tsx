import './BoardList.css';
import type {TaskProps} from "../board/Board.tsx";
import {Button} from "../../../components/Button.tsx";


type Props = {
    title: string,
    tasks: TaskProps[];
    data?: string; //? - не обязательный тип
    removeTask: (taskId: number) => void;
}


export const BoardList = (props: Props) => {

    const {title, tasks, data, removeTask} = props


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
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>

            <div>{data}</div>
        </div>
    );
};
