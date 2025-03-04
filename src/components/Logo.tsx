import {Link} from "react-router-dom";
import myLogo from "../assets/logo.svg";
import styled from "styled-components";

export const Logo = () => {
    return (
        <LogoWrapper>
            <Link to="/boards">
                <img src={myLogo} alt="My Logo"/>
            </Link>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`;