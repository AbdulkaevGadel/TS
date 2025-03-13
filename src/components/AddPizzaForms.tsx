import {ChangeEvent, FC, FormEvent, useState} from "react";
import "./styles.css"
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}


const initState = {
    title: "",
    price: "",
    img: "",
}


const AddPizzaForms: FC<AddPizzaFormProps> = (props) => {


    const [newPizza, setPizza] =
        useState<{ title: string, price: string, img: string }>(initState)


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target
        setPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const {title, price, img} = newPizza;
        if (title && price && img) {
            props.addPizza({
                title, price: Number(price), img, id: Date.now()
            })
        }
        setPizza(initState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Название"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="Стоимость"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="Изображение"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button
                type={"submit"}>
                + Добавить в меню
            </button>

        </form>
    )
}

export default AddPizzaForms