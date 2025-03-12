import {ChangeEvent, FC, FormEvent, useState} from "react";
import "../components/styles.css"
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza:Pizza)=>void,
    handleToggleEdit: ()=>void
}


const EditPizzaForm: FC<EditPizzaFormProps> = (props) => {


    const [editPizza, setEditPizza] =
        useState<Pizza>(props.data)


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const {title, price, img} = editPizza;
        if (title && price && img) {
            props.updatePizza(editPizza)
            props.handleToggleEdit()
        }
    }

    console.log(editPizza)


    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input
                name="title"
                type="text"
                placeholder="Название"
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="Стоимость"
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="Изображение"
                onChange={handleChange}
                value={editPizza.img}
            />
            <button
                type={"submit"}>
                Потвердить
            </button>

        </form>
    )
}

export default EditPizzaForm