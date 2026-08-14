import {type ChangeEvent, type SubmitEvent, useState} from "react";
import {Button} from "./Button.tsx";
import "./createForm.css"


type CreateFormProps = {
    onCreate: (newTitle: string) => void;
}


export const CreateForm = (props: CreateFormProps) => {

    const {onCreate} = props

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    // Handlers -------------
    const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(null)
    }
    // Клик по submit-кнопке и нажатие Enter в input приводят к одному событию submit формы.
    const addSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        addHandler(title)
        event.preventDefault()
    }
    const addHandler = (newTitle: string) => {
        const trimmenTitle = newTitle.trim()
        if (trimmenTitle !== "") {
            onCreate(trimmenTitle)
            setTitle("")
        } else {
            setError("Введите корректное название")
        }
    }

    // Отдельный onKeyDown/onKeyUp здесь не нужен: при нажатии Enter keyboard handler
    // вызовет addTaskHandler, а затем стандартный submit формы вызовет его повторно.
    // preventDefault в submit handler отменяет стандартную перезагрузку/переход страницы.
    // const addTaskKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //         addTaskHandler(taskTitle)
    //     }
    // }
    // Handlers -------------

    return (
        <form className={`form-add ${error ? "error" : ""}`} onSubmit={addSubmitHandler}>
            <input type={"text"}
                   value={title}
                   onChange={titleHandler}/>
            <Button title={"+"}/>
            {error && <span className={"error-message"}>{error}</span>}
        </form>

    );
};
