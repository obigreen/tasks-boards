import {TaskType} from "../board/Board";
import {S} from './BoardList_Styles'
import {Button} from "../../../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxArchive, faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {ChangeEvent, useState} from "react";

type PropsType = {
    title: string,
    tasks: TaskType[];
    removeTask: (taskId: string) => void;
    addTask: (taskTitle: string) => void;
}


export const BoardList = ({tasks, title, removeTask, addTask}: PropsType) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [error, setError] = useState(false);
    const [shakeTrigger, setShakeTrigger] = useState(0);

    const removeTaskHandler = (taskId: string) => {
        removeTask(taskId)
    }

    const addTaskHandler = () => {
        if (taskTitle.trim() !== "") {
            addTask(taskTitle.trim())
            setTaskTitle("")
        } else {
            setError(true)
            setShakeTrigger(prev => prev + 1);
        }
    }

    const onKeyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(false)
    }

    return (
        <S.Container>
            <S.Title>{title}</S.Title>

            {tasks.length ?
                <S.List>
                    {tasks.map((task: TaskType) => (
                        <S.Task key={task.id}>
                            <span>{task.title}</span>
                            <Button onClick={() => removeTaskHandler(task.id)}>
                                <FontAwesomeIcon icon={faBoxArchive} style={{fontSize: "10px"}}/>
                            </Button>
                        </S.Task>
                    ))}

                </S.List>
                :
                <S.NotTasks>Нет задач</S.NotTasks>
            }

            <S.AddTask>
                <S.Input
                    type="text"
                    onChange={onChangeInputHandler}
                    value={taskTitle}
                    onKeyDown={onKeyHandler}
                    placeholder={"Добавить задачу"}
                    error={error}
                    key={shakeTrigger}/>
                <Button onClick={addTaskHandler}
                        title={<FontAwesomeIcon icon={faPlus}/>}/>
            </S.AddTask>
        </S.Container>
    );
};



