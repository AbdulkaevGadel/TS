import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForms from "./components/AddPizzaForms";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/displayPizzas/DisplayPizzas";


const App: FC = () => {

    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza])
    }
    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) =>
            (pizza.id === newPizza.id ? newPizza : pizza)))
    }

    console.log(pizzasList)

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">
                    Наша пиццерия
                </span>
                <AddPizzaForms addPizza={addPizza}/>
                <DisplayPizzas pizzaList={pizzasList} updatePizza={updatePizza}/>
            </div>
        </div>
    );
}

export default App;
