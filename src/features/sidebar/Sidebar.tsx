import {Logo} from "../../components/Logo";
import {Navigation} from "./Navigation";
import {SidebarBoards} from "./SidebarBoards";

export const Sidebar = () => {
    return (
        <aside className="flex h-screen flex-col overflow-y-auto border-r border-white/10 bg-slate-950 px-5 py-6 text-slate-200 shadow-xl shadow-slate-950/10">
            <Logo/>
            <div className="my-6 h-px bg-white/10"/>

            <div className="flex flex-col gap-8">
                <Navigation/>
                <SidebarBoards/>
            </div>

            <div className="mt-auto border-t border-white/10 pt-5">
                <p className="text-xs font-medium text-slate-400">Learning workspace</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">React · Vite · TypeScript · Tailwind CSS</p>
            </div>
        </aside>
    );
};

