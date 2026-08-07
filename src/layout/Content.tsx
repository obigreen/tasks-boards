import {Header} from "./header/Header";
import {AppRoutes} from "../routes/AppRoutes";

export const Content = () => {

    return (
        <div className="flex min-w-0 flex-col overflow-y-auto">
            <Header />
            <div className="min-h-0 flex-1">
                <AppRoutes />
            </div>
        </div>
    );
};
