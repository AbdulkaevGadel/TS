const SET_PIZZA = "Pizza-reducer/SET_PIZZA";

type InitialState = {
    id: number | null,
    title: string,
    price: number | null,
    img: string,
}

let initialState: InitialState = {
    id: null,
    title: "test",
    price: null,
    img: 'margarita.img',
};


const pizzaReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PIZZA:
            return {
                ...state,
                id: action.id,
                title: action.title,
                price: action.price,
                img: action.img,
            };
        default:
            return state;
    }
};

export const setItemsNomenclature = (id:number|null,title:string,price:number|null,img:string) => ({
    type: SET_PIZZA,
    id: id,
    title: title,
    price: price,
    img:img,
});

export default pizzaReducer;
