import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

type Board = {
    id: number;
    name: string;
};


export const Boards = () => {

    const boards: Board[] = [
        {id: 1, name: 'Board one'}
    ];


    return (
        <section className="w-full max-w-full p-8">
            <div className="mb-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Workspace</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Your boards</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Open a board to manage tasks and continue working with your list.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {boards.map((board) => (
                    <Link
                        key={board.id}
                        to={`/boards/${board.id}`}
                        className="group flex min-h-36 items-end justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
                    >
                        <div>
                            <span className="mb-8 inline-flex size-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-500">
                                {String(board.id).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg font-semibold text-slate-900">{board.name}</h3>
                        </div>
                        <span className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-slate-300 group-hover:bg-slate-950 group-hover:text-white">
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs"/>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

