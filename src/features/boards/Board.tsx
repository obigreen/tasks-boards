import React from 'react';
import styled from 'styled-components';
import {TaskList} from '../tasks/TaskList';



export const Board = () => {



    return (
        <BoardContainer>
            <BoardViewWrapper>
                <Lists>
                    <TaskList />
                </Lists>
            </BoardViewWrapper>
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;


const BoardViewWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
`;

const Lists = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    overflow-x: auto;
    height: 100%;
`;



