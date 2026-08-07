import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const boards = [
    {id: 1, title: "First board"}
];

export const SidebarBoards = () => {
    return (
        <section>
            <div className="mb-2 flex items-center justify-between px-3">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">Your boards</h2>
                <button
                    type="button"
                    className="inline-flex size-7 items-center justify-center rounded-md text-slate-500 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
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
                                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400",
                                isActive
                                    ? "bg-white/10 text-white"
                                    : "text-slate-400 hover:bg-white/5 hover:text-slate-100",
                            ].join(" ")}
                        >
                            <span className="truncate">{board.title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
};
