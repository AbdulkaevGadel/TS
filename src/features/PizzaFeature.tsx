import {FC, useEffect, useState} from "react";
import Pizza from "../models/Pizza";
import {Link, useParams} from "react-router-dom";

const PizzaFeature: FC = () => {

    const [pizza, setPizza] = useState<Pizza | null>(null)

    const {id} = useParams()

    useEffect(() => {
        const pizzasState = localStorage.getItem('pizzasState')
        if (pizzasState && id) {
            const pizzaList = JSON.parse(pizzasState);
            const searchId = parseInt(id);

            const currentPizza = pizzaList.find((p: Pizza) => p.id === searchId)
            setPizza(currentPizza)
        }
    }, [])

    return (
        <>
            <span className="heading">Ваша пицца</span>
            <div className="pizza pizza-page">
                <img src={`/images/${pizza?.img}`} alt={pizza?.title}/>
                <h2>{pizza?.title}</h2>
                <span>{pizza?.price} ₽</span>
                {pizza ? <p>Лучшая пицца в городе!</p> : null}
            </div>
            <div>
                <Link to={'/'}>
                    Вернуться в пиццерию
                </Link>
            </div>
        </>
    )
}

export default PizzaFeature