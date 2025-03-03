import styled from "styled-components";


const Container = styled.div`
    background: #212121;
    padding: 15px;
    border-radius: 8px;
    min-width: 250px;
    height: max-content;
`;

const Title = styled.h2`
    text-align: left;
    color: white;
    font-weight: 200;
    font-size: 20px;
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin-top: 10px;
`;

const Task = styled.li`
    background: white;
    font-weight: 100;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
`;

const AddTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`

const Input = styled.input`
    width: 100%;
    background: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`

const Button = styled.button`
    background: white;
    padding: 10px;
    border-radius: 5px;
`


export const S = {
    Container, Title, List, Task, AddTask, Input, Button
}