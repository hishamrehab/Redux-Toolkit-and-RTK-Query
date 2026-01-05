import { ORDER_PIZZA } from "../redux/pizza/PizzaTypes";
const initialState  = {
    pizzaBase : 1000
}

const pizzaReducer = (state = initialState , action) => {
        switch (action.type) { 
        case ORDER_PIZZA:
            return {
                ...state ,
            pizzaBase: state.pizzaBase - 1       
    }
    default:
        return state
    }
}

export default pizzaReducer;