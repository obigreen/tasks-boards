import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {boards} from "../boards/boardsData.ts";


export const SidebarBoards = () => {
    return (
        <section>
            <div className="mb-2 flex items-center justify-between px-3">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">Your boards</h2>
                <button
                    type="button"
                    className="inline-flex size-7 items-center justify-center border border-transparent text-slate-500 transition-colors hover:border-slate-700 hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    aria-label="Добавить доску"
                    title="Добавить доску"
                >
                    <FontAwesomeIcon icon={faPlus} className="text-xs cursor-pointer"/>
                </button>
            </div>

            <ul className="flex flex-col gap-1">
                {boards.map((board) => (
                    <li key={board.id}>
                        <NavLink
                            to={`/boards/${board.id}`}
                            className={({isActive}) => [
                                "group flex items-center gap-3 border-l-2 px-3 py-2 text-sm transition-colors",
                                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400",
                                isActive
                                    ? "border-amber-400 bg-white/[0.07] text-white"
                                    : "border-transparent text-slate-400 hover:border-slate-700 hover:bg-white/[0.04] hover:text-slate-100",
                            ].join(" ")}
                        >
                            <span className="truncate">{board.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
};
