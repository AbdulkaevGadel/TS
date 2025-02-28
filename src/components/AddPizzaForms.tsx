import {ChangeEvent, FC, FormEvent, useState} from "react";
import "./styles.css"

const AddPizzaForms: FC = () => {

    const initState = {
        title: "",
        price: "",
        img: "",
    }


    const [newPizza, setPizza] =
        useState<{ title: string, price: string, img: string }>(initState)


    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        console.log("handle change>>", e.target)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        console.log("handle change>>", e.target)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                name="titile"
                type="text"
                placeholder="Название"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="Price"
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