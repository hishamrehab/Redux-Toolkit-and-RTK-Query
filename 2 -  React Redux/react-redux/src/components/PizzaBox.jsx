const PizzaBox = () => {
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

export default PizzaBox