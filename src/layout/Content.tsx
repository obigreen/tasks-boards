import React from 'react';
import {Header} from "./header/Header";
import {AppRoutes} from "../routes/AppRoutes";
import styled from "styled-components";

export const Content = () => {

    return (
        <MainContent>
            <Header />
            <AppRoutes />
        </MainContent>
    );
};


const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

