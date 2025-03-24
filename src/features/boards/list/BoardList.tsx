import {ListsType, TaskType} from "../board/Board";
import {S} from './BoardList_Styles'
import {Button} from "../../../components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxArchive} from "@fortawesome/free-solid-svg-icons";
import {InputComponent} from "../../../components/InputComponent";
import React from "react";
import {EditName} from "../../../components/EditName";


type PropsType = {
    title: string,
    list: ListsType,
    tasks: TaskType[],
    removeTask: (listId: string, taskId: string) => void;
    addTask: (listId: string, title: string) => void;
    removeList: (listId: string) => void;
    changeTaskTitle: (listId: string, taskId: string, title: string) => void;
    changeListTitle: (listId: string, title: string) => void;
}


export const BoardList = ({list, tasks, removeTask, addTask, removeList, changeTaskTitle, changeListTitle}: PropsType) => {


    const removeTaskHandler = (taskId: string) => {
        removeTask(list.id, taskId)
    }


    const addTaskHandler = (title: string) => {
        addTask(list.id, title)
    }

    const removeTodolistHandler = () => {
        removeList(list.id)
    }

    const changeListTitleHandler = (title: string) => {
        changeListTitle(list.id, title);
    };


    return (
        <S.Container>
            <S.TitleWrapper>
                <S.Title>
                    <EditName title={list.title} onChange={changeListTitleHandler}/>
                </S.Title>
                <Button onClick={removeTodolistHandler}>
                    <FontAwesomeIcon icon={faBoxArchive}/>
                </Button>
            </S.TitleWrapper>
            {tasks.length ?

                <S.List>
                    {tasks.map(task => {

                        const changeTitleHandler = (title: string) => {
                            changeTaskTitle(list.id, task.id, title);
                        };

                        return (
                            <S.Task key={task.id}>
                                <EditName title={task.title} onChange={changeTitleHandler}/>
                                <Button onClick={() => removeTaskHandler(task.id)}>
                                    <FontAwesomeIcon icon={faBoxArchive} style={{fontSize: "10px"}}/>
                                </Button>
                            </S.Task>
                        )
                    }
                )}
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



