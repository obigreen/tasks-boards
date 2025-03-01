import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Boards} from "../features/boards/Boards";
import {Members} from "../features/members/Members";
import {BoardView} from "../features/boards/BoardView";


interface AppRoutesProps {
    setBoardName: React.Dispatch<React.SetStateAction<string>>;
}


export const AppRoutes= ({ setBoardName }: AppRoutesProps) => {

    return (
        <Routes>
            <Route path="/boards"
                   element={<Boards setBoardName={setBoardName}/>}/>

            <Route path="/members"
                   element={<Members setBoardTitle={setBoardName}/>}/>

            <Route path="/boards/:id"
                   element={<BoardView setBoardName={setBoardName}/>}/>
        </Routes>
    );
};
