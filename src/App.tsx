import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Sidebar} from "./features/sidebar/Sidebar";
import {Content} from "./layout/Content";


function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <main className="App">
                <Sidebar/>
                <Content/>
            </main>
        </Router>
    );
}

export default App;




