import { orderPizza  }from "../redux"
const PizzaBox = (props) => {
  console.log("props", props);

  return (
    <div className="container">
      <h2 className="text">
        Number of Pizza Base available - 100
      </h2>
      <button className="btn">
        Order Pizza
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
   return {
   pizzaBase:state.pizzaBase
   }
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza())
  }
}


export default PizzaBox