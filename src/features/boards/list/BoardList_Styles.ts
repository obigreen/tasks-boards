import styled from "styled-components";


const Container = styled.div`
    position: relative;
    background-color: #212121;
    padding: 15px;
    border-radius: 8px;
    min-width: 250px;
    width: 100%;
    max-width: 250px;
    height: max-content;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Title = styled.h2`
    text-align: left;
    color: white;
    font-weight: 200;
    font-size: 20px;
`;

const List = styled.ul`
 
`;

const Task = styled.li`
    position: relative;
    background: white;
    font-weight: 100;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    
    button {
        position: absolute;
        top: 2px;
        right: 2px;
        width: 10px;
        height: 10px;
        color: #f4f5f7;
        background-color: black;
    }
`;


const NotTasks = styled.p`
    width: 100%;
    background-color: #ffba41; 
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    color: #212121;
`

export const S = {
    Container, TitleWrapper, Title, List, Task, NotTasks
}