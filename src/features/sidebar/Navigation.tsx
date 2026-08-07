import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTableColumns, faUsers} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const getNavItemClassName = ({isActive}: {isActive: boolean}) => [
    "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400",
    isActive
        ? "bg-white/10 text-white shadow-sm"
        : "text-slate-400 hover:bg-white/5 hover:text-slate-100",
].join(" ");

export const Navigation = () => {
    return (
        <nav aria-label="Основная навигация">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Menu
            </p>
            <ul className="flex flex-col gap-1">
                <li>
                    <NavLink to="/boards" end className={getNavItemClassName}>
                        <FontAwesomeIcon icon={faTableColumns} className="w-4 text-slate-500 transition group-hover:text-slate-300"/>
                        <span>Boards</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/members" className={getNavItemClassName}>
                        <FontAwesomeIcon icon={faUsers} className="w-4 text-slate-500 transition group-hover:text-slate-300"/>
                        <span>Members</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
