import {NavLink} from "react-router-dom";
import {navigationData} from "./navigationData.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const getNavItemClassName = ({isActive}: { isActive: boolean }) => [
    "group flex items-center gap-3 border-l-2 px-3 py-2.5 text-sm font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400",
    isActive
        ? "border-amber-400 bg-white/[0.07] text-white"
        : "border-transparent text-slate-400 hover:border-slate-700 hover:bg-white/[0.04] hover:text-slate-100",
].join(" ");

export const Navigation = () => {


    return (
        <nav aria-label="Основная навигация">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Menu
            </p>
            <ul className="flex flex-col gap-1">

                {navigationData.map((item) => (
                    <li key={item.id}>
                        <NavLink to={item.path} end={item.end} className={getNavItemClassName}>
                            <FontAwesomeIcon icon={item.icon}
                                             className="w-4 text-slate-500 transition group-hover:text-slate-300"/>
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                ))}

            </ul>
        </nav>
    );
};
