import styled from "styled-components";
import {ReactNode} from "react";

type ButtonType = {
    title?: string | ReactNode
    children?: ReactNode;
    onClick?: () => void;
}

export const Button = ({title, children, onClick}: ButtonType) => {
    return (
        <ButtonStyle onClick={onClick}>{title || children}</ButtonStyle>
    );
};

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;
    &:hover {
        scale: 110%;
        color: #ffba41;
    }
`

