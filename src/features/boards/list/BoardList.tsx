import {ListsType, TaskType} from "../board/Board";
import {S} from './BoardList_Styles'
import {Button} from "../../../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxArchive} from "@fortawesome/free-solid-svg-icons";
import {InputComponent} from "../../../components/InputComponent";
import React from "react";


type PropsType = {
    title: string,
    list: ListsType,
    tasks: TaskType[],
    removeTask: (listId: string, taskId: string) => void;
    addTask: (listId: string, title: string) => void;
    removeList: (listId: string) => void;
}


export const BoardList = ({list, tasks, title, removeTask, addTask, removeList}: PropsType) => {


    const removeTaskHandler = (taskId: string) => {
        removeTask(list.id, taskId)
    }


    const addTaskHandler = (title: string) => {
        addTask(list.id, title)
    }

    const removeTodolistHandler = () => {
        removeList(list.id)
    }

    return (
        <S.Container>
            <S.TitleWrapper>
                <S.Title>{title}</S.Title>
                <Button onClick={removeTodolistHandler}>
                    <FontAwesomeIcon icon={faBoxArchive}/>
                </Button>
            </S.TitleWrapper>

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
            <div>
                <InputComponent onCrateItem={addTaskHandler}/>
            </div>
        </S.Container>
    );
};



