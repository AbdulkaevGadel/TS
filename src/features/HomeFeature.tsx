import React, {FC, useEffect, useState} from 'react';
import AddPizzaForms from "../components/AddPizzaForms";
import Pizza from "../models/Pizza";
import DisplayPizzas from "../components/displayPizzas/DisplayPizzas";


const HomeFeature: FC = () => {

    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {

        const addPizza = [...pizzasList, newPizza]
        setPizzasList(addPizza)
        localStorage.setItem('pizzasState', JSON.stringify(addPizza))

    }
    const updatePizza = (newPizza: Pizza) => {
        const updatePizza = (pizzasList.map((pizza) =>
            (pizza.id === newPizza.id ? newPizza : pizza)))
        setPizzasList(updatePizza)
        localStorage.setItem('pizzasState', JSON.stringify(updatePizza))
    }

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
        setPizzasList(newPizzasList)
        localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
    }

    console.log(pizzasList)

    useEffect(() => {
        const pizzasState = localStorage.getItem('pizzasState')
        if (pizzasState) {
            setPizzasList(JSON.parse(pizzasState))
        }
    }, [])

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">
                    Наша пиццерия
                </span>
                <AddPizzaForms addPizza={addPizza}/>
                <DisplayPizzas pizzaList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza}/>
            </div>
        </div>
    );
}

export default HomeFeature;
