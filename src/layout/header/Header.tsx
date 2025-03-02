import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";
import {faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";



export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle>Title</HeaderTitle>
            <HeaderButtonsNav>
                <ShareButton>
                    <FontAwesomeIcon icon={faSquarePlus}/>
                    <span>Поделиться</span>
                </ShareButton>
                <button className="add-board-btn">
                    <FontAwesomeIcon icon={faScrewdriverWrench}/>
                </button>
            </HeaderButtonsNav>
        </HeaderWrapper>
    );
};


const HeaderWrapper = styled.header`
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

