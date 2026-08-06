import './BoardList.css';

export const BoardList = () => {
    return (
        <div className="board-list">
            <h3>What to learn</h3>

            <div className="add-task">
                <input/>
                <button>+</button>
            </div>

            <ul className="tasks">
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>HTML&amp;CSS</span>
                </li>
                <li>
                    <input type="checkbox" checked={true}/>
                    <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={false}/>
                    <span>React</span>
                </li>
            </ul>

            <div className="filter-buttons">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
