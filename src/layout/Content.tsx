import React, {useState} from 'react';
import {Header} from "./header/Header";
import {AppRoutes} from "../routes/AppRoutes";
import styled from "styled-components";

export const Content = () => {
    const [boardName, setBoardName] = useState('');

    return (
        <MainContent>
            <Header boardName={boardName} />
            <AppRoutes setBoardName={setBoardName} />
        </MainContent>
    );
};


const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

