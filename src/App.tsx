import React, {FC} from 'react';
import './App.css';
import AddPizzaForms from "./components/AddPizzaForms";


const App: FC = () => {
    return (
        <div className="App">
            <div className="heading">
                <span className="wrap">
                    Наша пиццерия
                </span>
                <AddPizzaForms/>
            </div>
        </div>
    );
}

export default App;
