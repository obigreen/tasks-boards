import React, {ChangeEvent, useCallback, useState} from "react";
import {ListsType, TaskType} from "../board/Board";
import {S} from './BoardList_Styles'
import {Button} from "../../../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxArchive, faPlus} from "@fortawesome/free-solid-svg-icons";


type PropsType = {
    title: string,
    list: ListsType,
    tasks: TaskType[],
    removeTask: (listId: string, taskId: string) => void;
    addTask: (listId: string, taskTitle: string) => void;
}


export const BoardList = ({list, tasks, title, removeTask, addTask}: PropsType) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [error, setError] = useState(false);
    const [shakeTrigger, setShakeTrigger] = useState(0);

    const removeTaskHandler = (taskId: string) => {
        removeTask(list.id, taskId)
    }

    const addTaskHandler = () => {
        if (taskTitle.trim() !== "") {
            addTask(list.id, taskTitle.trim())
            setTaskTitle("")
        } else {
            setError(true)
            setShakeTrigger(prev => prev + 1);
        }
    }

    //
    const onKeyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    //Callback-ref, который при наличии ошибки error устанавливает фокус на переданный элемент.
    const focusError = useCallback((el: HTMLInputElement | null) => {
        if (el && error) {
            el.focus();
        }
    }, [error]);


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(false)
    }

    return (
        <S.Container>
            <S.Title>{title}</S.Title>

            {tasks.length ?
                <S.List>
                    {tasks.map(task => (
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
                <S.Input ref={focusError}
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



