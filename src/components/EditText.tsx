import {type ChangeEvent, useState} from "react";
import "./editText.css"

type EditTextProps = {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export const EditText = (props: EditTextProps) => {

    const {value, onChange, className} = props
    const [isEditMode, setIsEditMode] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const editMode = () => {
        if (!isEditMode) {
            setIsEditMode(true)
        } else {
            setIsEditMode(false)
            onChange(newValue)
        }
    }

    // Handlers -------------
    const newValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewValue(event.currentTarget.value)
    }
    // Handlers -------------

    return (
        <>
            {isEditMode ? (
                <input className={`edit-input ${className}`}
                       type="text"
                       autoFocus
                       value={newValue}
                       onBlur={editMode}
                       onChange={newValueHandler}/>
            ) : (
                <span onDoubleClick={editMode} className={`edit-text ${className}`}>{newValue}</span>
            )}
        </>
    );
};
