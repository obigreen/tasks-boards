import {BrowserRouter as Router} from 'react-router-dom';
import {Sidebar} from "./features/sidebar/Sidebar";
import {Content} from "./layout/Content";


function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <main className="grid h-screen grid-cols-[17.5rem_minmax(0,1fr)] overflow-hidden bg-slate-100 text-slate-950">
                <Sidebar/>
                <Content/>
            </main>
        </Router>
    );
}

export default App;



