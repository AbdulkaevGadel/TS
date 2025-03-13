import React, {FC, useState} from "react";
import Pizza from "../../models/Pizza";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import EditPizzaForm from "../../editPizzaForm/EditPizzaForm";
import {Link} from "react-router-dom";


interface SinglePizzaProps {
    pizza: Pizza,
    updatePizza: (newPizza:Pizza)=>void,
    deletePizza: (id: number) => void,
}


const SinglePizza: FC<SinglePizzaProps> = (props) => {

    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit =() =>{
        setEdit(!edit)
    }

    const handleDelete = () =>{
        props.deletePizza(props.pizza.id)
    }



    return (
        <div className="pizza">
            <img src={`/images/${props.pizza.img}`} alt={props.pizza.title}/>
            <h2>
            <Link to={`/pizza/${props.pizza.id}`}>
            {props.pizza.title}
            </Link>
            </h2>
            <span>{props.pizza.price} ₽</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleDelete}/>
            </div>
            {edit
            ? <EditPizzaForm data={props.pizza} updatePizza={props.updatePizza} handleToggleEdit={handleToggleEdit}/>:null}
        </div>
    )
}

export default SinglePizza;