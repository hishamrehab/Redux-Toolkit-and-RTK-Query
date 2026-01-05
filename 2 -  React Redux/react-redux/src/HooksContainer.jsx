import { useSelector } from "react-redux"

function HookContainer() {
   const pizzaBase = useSelector(state => state.pizzaBase);
   console.log(pizzaBase);
  return (
    <div className='container'>
        <h2 className="text">Number of Pizza Base available - {pizzaBase}</h2>
        <button className="btn">Order Pizza</button>
    </div>
  )
}


export default HookContainer