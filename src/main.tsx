import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./app/store.ts";


// yarn add react-redux - библиотека склеивает react и redux
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App/>*/}
        <Provider store={store}>
            <App/>
        </Provider>

    </StrictMode>
);
