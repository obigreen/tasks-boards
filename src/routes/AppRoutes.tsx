import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Boards} from "../features/boards/Boards";
import {Members} from "../features/members/Members";
import {Board} from "../features/boards/board/Board";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/boards"
                   element={<Boards/>}/>

            <Route path="/boards/:id"
                   element={<Board/>}/>

            <Route path="/members"
                   element={<Members/>}/>
        </Routes>
    );
};
