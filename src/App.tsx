import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import myLogo from './assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { BoardView } from './BoardView';
import { Boards } from './Boards';
import { Members } from "./Members";



function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [boardName, setBoardName] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Router>
            <AppGrid className="App">
                <Sidebar>
                    <Logo>
                        <Link to="/">
                            <img src={myLogo} alt="My Logo" />
                        </Link>
                    </Logo>

                    <nav>
                        <NavList>
                            <li>
                                <NavItem to="/">
                                    <FontAwesomeIcon icon={faLemon} />
                                    <span>Boards</span>
                                </NavItem>
                            </li>
                            <li>
                                <NavItem to="/members">
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>Members</span>
                                </NavItem>
                            </li>
                        </NavList>
                    </nav>

                    <SidebarBoards>
                        <BoardsHeader>
                            <BoardsTitle>Boards</BoardsTitle>
                            <AddBoardButton>
                                {/* Кнопка для добавления новой доски */}
                            </AddBoardButton>
                        </BoardsHeader>
                        <BoardsList>
                            <li>
                                <BoardItem to="/board/1">
                                    <span>First board</span>
                                </BoardItem>
                            </li>
                            <li>
                                <BoardItem to="/board/2">
                                    <span>Second board</span>
                                </BoardItem>
                            </li>
                        </BoardsList>
                    </SidebarBoards>
                </Sidebar>

                <MainContent>
                    <Header>
                        {/* Если boardName пуст — пишем “Boards” как fallback */}
                        <HeaderTitle>{boardName || 'Boards'}</HeaderTitle>
                        <HeaderButtonsNav>
                            <ShareButton>
                                <FontAwesomeIcon icon={faSquarePlus} className="share-icon" />
                                <span>Поделиться</span>
                            </ShareButton>
                            <button className="add-board-btn" onClick={toggleSidebar}>
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                            </button>
                        </HeaderButtonsNav>
                    </Header>

                    <Routes>

                        <Route path="/" element={<Boards setBoardName={setBoardName} />} />

                        {/* Страница "/members" */}
                        <Route
                            path="/members"
                            element={<Members setBoardTitle={setBoardName} />}
                        />

                        {/* Доска "/board/:id", внутри BoardView выставит реальное имя */}
                        <Route
                            path="/board/:id"
                            element={
                                <BoardView
                                    isSidebarOpen={isSidebarOpen}
                                    toggleSidebar={toggleSidebar}
                                    setBoardName={setBoardName}
                                />
                            }
                        />
                    </Routes>
                </MainContent>
                {/* Меню выносим на общий уровень */}
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
                        <hr />
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




// ========== Стили ==========
const AppGrid = styled.main`
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100%;
  max-height: 100%;
`;

const Sidebar = styled.aside`
  background: #212121;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 5px 5px 0;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  span {
    display: block;
    margin-top: 2px;
    font-size: 20px;
  }

  &:hover {
    color: #ffba41;
  }
`;

const SidebarBoards = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const BoardsTitle = styled.h2`
  font-size: 23px;
  font-weight: 400;
  margin: 0;
`;

const AddBoardButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  padding: 0;

  &:hover {
    color: #ffba41;
  }
`;

const BoardsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const BoardItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 5px 5px 0;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffba41;
  }
`;

const MainContent = styled.div`
  overflow-y: auto;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #212121;
  padding: 20px;
  color: white;
  flex-shrink: 0;
  width: 100%;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: 200;
`;

const HeaderButtonsNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  background-color: white;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #ffba41;
  }
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



