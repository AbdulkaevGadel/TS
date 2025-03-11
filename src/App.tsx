import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForms from "./components/AddPizzaForms";
import Pizza from "./models/Pizza";


const App: FC = () => {

    const [pizzasList, setPizzasList] = useState < Pizza[]>([]);

    const addPizza = (newPizza:Pizza)=> {
        setPizzasList([...pizzasList,newPizza])
    }

    console.log(pizzasList)

return (
    <div className="App">
        <div className="wrap">
                <span className="heading">
                    Наша пиццерия
                </span>
            <AddPizzaForms addPizza = {addPizza} />
        </div>
    </div>
);
}

export default App;
