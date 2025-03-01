import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Sidebar} from "./features/sidebar/Sidebar";
import {Content} from "./layout/Content";


function App() {
    return (
        <Router>
            <main className="App">
                <Sidebar/>
                <Content/>
            </main>
        </Router>
    );
}

export default App;





