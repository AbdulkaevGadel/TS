import React, {FC, useState} from "react";
import Pizza from "../../models/Pizza";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import EditPizzaForm from "../../editPizzaForm/EditPizzaForm";


interface SinglePizzaProps {
    pizza: Pizza,
    updatePizza: (newPizza:Pizza)=>void,
}


const SinglePizza: FC<SinglePizzaProps> = (props) => {

    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit =() =>{
        setEdit(!edit)
    }

    return (
        <div className="pizza">
            <img src={`/images/${props.pizza.img}`} alt={props.pizza.title}/>
            <h2>{props.pizza.title} </h2>
            <span>{props.pizza.price} ₽</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete/>
            </div>
            {edit
            ? <EditPizzaForm data={props.pizza} updatePizza={props.updatePizza} handleToggleEdit={handleToggleEdit}/>:null}
        </div>
    )
}

export default SinglePizza;