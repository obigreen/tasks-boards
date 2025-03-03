import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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


export const S = {
    Container, Lists
}