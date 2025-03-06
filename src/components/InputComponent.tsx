import {Button} from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import React, {ChangeEvent, useCallback, useState} from "react";
import styled, {keyframes} from "styled-components";

type InputProps = {
    onCrateItem: (title: string) => void
}


export const InputComponent = ({onCrateItem}: InputProps) => {

    const [error, setError] = useState(false);
    const [shakeTrigger, setShakeTrigger] = useState(0);
    const [title, setTitle] = useState("");


    const addHandler = () => {
        if (title.trim() !== "") {
            onCrateItem(title)
            setTitle("")
        } else {
            setError(true)
            setShakeTrigger(prev => prev + 1);
        }
    }

    const onKeyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addHandler()
        }
    }

    //Callback-ref, который при наличии ошибки error устанавливает фокус на переданный элемент.
    const focusError = useCallback((el: HTMLInputElement | null) => {
        if (el && error) {
            el.focus();
        }
    }, [error]);


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(false)
    }

    return (
        <AddTask>
            <Input ref={focusError}
                   type="text"
                   onChange={onChangeInputHandler}
                   value={title}
                   onKeyDown={onKeyHandler}
                   placeholder={"Добавить"}
                   error={error}
                   key={shakeTrigger}/>
            <Button onClick={addHandler} title={<FontAwesomeIcon icon={faPlus}/>}/>
        </AddTask>
    );
};


const AddTask = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    min-width: 220px;
    width: 100%;
    max-width: 220px;
`

const shake = keyframes`
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    50% {
        transform: translateX(5px);
    }
    75% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
`;

const Input = styled.input<{ error: boolean }>`
    width: 100%;
    background: white;
    padding: 10px;
    border: none;
    outline: ${(props) => (props.error ? "1px solid red" : "none")};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 200;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    animation: ${(props) => (props.error ? shake : "none")} 0.3s ease-in-out;
`
