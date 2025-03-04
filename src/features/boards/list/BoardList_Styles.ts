import styled, {keyframes} from "styled-components";


const Container = styled.div`
    background-color: #212121;
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

const AddTask = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
`

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const Input = styled.input<{ error: boolean }>`
    width: 100%;
    background: white;
    padding: 10px;
    border: none;
    outline: ${(props) => (props.error ? "1px solid red" : "none")};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 200;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    animation: ${(props) => (props.error ? shake : "none")} 0.3s ease-in-out;
`

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
    Container, Title, List, Task, AddTask, Input, NotTasks
}