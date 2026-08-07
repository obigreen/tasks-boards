import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faSliders} from "@fortawesome/free-solid-svg-icons";



export const Header = () => {
    return (
        <header className="sticky top-0 z-20 flex min-h-20 w-full shrink-0 items-center justify-between border-b border-slate-200 bg-white/95 px-8 py-4 backdrop-blur">
            <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Workspace
                </p>
                <h1 className="text-xl font-semibold tracking-tight text-slate-900">Task boards</h1>
            </div>

            <nav className="flex items-center gap-2" aria-label="Действия рабочего пространства">
                <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 cursor-pointer"
                >
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-xs text-slate-500"/>
                    <span>Поделиться</span>
                </button>
                <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 cursor-pointer"
                    aria-label="Настройки"
                    title="Настройки"
                >
                    <FontAwesomeIcon icon={faSliders}/>
                </button>
            </nav>
        </header>
    );
};
