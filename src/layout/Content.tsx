import {Header} from "./header/Header";
import {AppRoutes} from "../routes/AppRoutes";
import {useLocation, useMatch} from "react-router-dom";
import {navigationData} from "../features/sidebar/navigationData.ts";
import {boards} from "../features/boards/boardsData.ts";

export const Content = () => {

    const {pathname} = useLocation();
    const boardMatch = useMatch("/boards/:id");
    const currentNavigationData = navigationData.find(
        (item) => item.path === pathname);
    const currentBoard = boards.find(
        (board) => String(board.id) === boardMatch?.params.id
    );

    let headerTitle = currentNavigationData?.title ?? "Not Found Name";
    if (currentBoard) {
        headerTitle = currentBoard.name
    }

    return (
        <div className="flex min-w-0 flex-col overflow-y-auto">
            <Header boardTitle={headerTitle}/>
            <div className="min-h-0 flex-1">
                <AppRoutes />
            </div>
        </div>
    );
};
