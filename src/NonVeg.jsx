import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg()
{
    const nonVegproducts=useSelector(state=>state.products.nonveg)
    const dispatch=useDispatch()
    const nonVegItems=nonVegproducts.map((item,index)=>(
        <li key={index}>{item.name}-${item.price.toFixed(2)}
        <button onClick={()=>dispatch(addToCart(item))}>Add Cart</button>
        </li>
    )
)
    return(
        <>
        <h1>Non-Veg Items...</h1>
        <ul>{nonVegItems}</ul>
        </>
    )
}
export default NonVeg;
