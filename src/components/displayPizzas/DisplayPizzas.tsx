import {FC} from "react";
import Pizza from "../../models/Pizza";
import SinglePizza from "../singlePizza/SinglePizza";

interface DisplayPizzasProps {
    pizzaList: Pizza[],
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void,
}


const DisplayPizzas: FC<DisplayPizzasProps> = (props) => {
    return (
        <div className="container">
            {props.pizzaList.map((pizza) => {
                return (<SinglePizza {...props} key={pizza.id} pizza={pizza} updatePizza={props.updatePizza}
                                     deletePizza={props.deletePizza}/>)
            })}
        </div>
    )
}

export default DisplayPizzas;