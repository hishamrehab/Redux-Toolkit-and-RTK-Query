const ORDER_PIZZA = "ORDER_PIZZA"

// Action 
// const action = {
//     type : ORDER_PIZZA,
//     shop_name : "Pizza Shop"
// }


// Action Creator
function orderPizza() {
    return {
    type : ORDER_PIZZA,
    shop_name : "Pizza Shop"
}
}