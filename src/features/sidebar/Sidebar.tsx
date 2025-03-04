import styled from "styled-components";
import {Logo} from "../../components/Logo";
import {Navigation} from "./Navigation";
import {SidebarBoards} from "./SidebarBoards";

export const Sidebar = () => {
    return (
        <Aside>
            <Logo/>
            <Navigation/>
            <SidebarBoards/>
        </Aside>
    );
};


const Aside = styled.aside`
    background: #212121;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;


