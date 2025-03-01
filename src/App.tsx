import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import {Sidebar} from "./features/sidebar/Sidebar";
import {Header} from "./layout/header/Header";
import {AppRoutes} from "./routes/AppRoutes";


function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [boardName, setBoardName] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Router>
            <AppGrid className="App">
                <Sidebar/>

                <MainContent>
                    <Header boardName={boardName} toggleSidebar={toggleSidebar} />
                    <AppRoutes setBoardName={setBoardName} />
                </MainContent>


                <SidebarSettings $active={isSidebarOpen}>
                    <SidebarHeader>
                        <h2>Меню</h2>
                        <CloseBtn onClick={toggleSidebar}>✕</CloseBtn>
                    </SidebarHeader>
                    <SidebarList>
                        <li>
                            <a href="#">О доске</a>
                        </li>
                        <li>
                            <a href="#">Действия</a>
                        </li>
                        <li>
                            <a href="#">Архив</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="#">Настройки</a>
                        </li>
                        <li>
                            <a href="#">Сменить фон</a>
                        </li>
                    </SidebarList>
                </SidebarSettings>
            </AppGrid>
        </Router>
    );
}

export default App;


const AppGrid = styled.main`
    display: grid;
    grid-template-columns: 260px 1fr;
    height: 100vh;
`;


const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;


const SidebarSettings = styled.div<{ $active: boolean }>`
    position: fixed;
    top: 0;
    right: ${({$active}) => ($active ? '0' : '-320px')};
    width: 320px;
    height: 100%;
    background: #212121;
    color: white;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.4);
    padding: 20px;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CloseBtn = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;

    li a {
        color: inherit;
        text-decoration: none;
    }

    hr {
        border: 1px solid #444;
        margin: 10px 0;
    }
`;



