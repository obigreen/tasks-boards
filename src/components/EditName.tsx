import {ChangeEvent, useState} from "react";


type EditPropsType = {
    title: string;
    onChange: (title: string) => void;
}

export const EditName = ({title, onChange}: EditPropsType) => {

    const [editName, setEditName] = useState(false)
    const [newTitle, setNewTitle] = useState(title);

    const turnOnEditMode = () => {
        setEditName(true)
    }

    const turnOffEditMode = () => {
        setEditName(false)
        onChange(title)
    }


    const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }


    return (
        <>
            {editName ?
                (<input type="text" value={newTitle} autoFocus onBlur={turnOffEditMode} onChange={changeTitle}/>)
                :
                (<span onDoubleClick={turnOnEditMode}>{newTitle}</span>)
            }
        </>
    );
};
