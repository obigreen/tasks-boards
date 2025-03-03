import styled from "styled-components";
import {Link} from "react-router-dom";


const Container = styled.div`
    color: white;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
`;


const CardName = styled(Link)`
    background: #212121;
    padding: 30px;
    border-radius: 8px;
    transition: 0.3s;
    font-size: 30px;
    color: white;
    text-decoration: none;

    &:hover {
        color: #ffba41;
    }
`;

export const S = {
    Container, CardName
}