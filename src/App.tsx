import React, {FC} from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import PizzaPage from "./pages/PizzaPage";


const App: FC = () => {

    return (
        <div className="App">
            <div className='wrap'>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/pizza/:id" element={<PizzaPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
