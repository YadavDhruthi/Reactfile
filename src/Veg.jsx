import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Veg() {
  const vegProducts = useSelector(state => state.products.veg);
  const dispatch = useDispatch();

  const items = vegProducts.map((grocery, index) => (
    <li key={index}>
      {grocery.name} - ${grocery.price.toFixed(2)}
      <button onClick={() => dispatch(addToCart(grocery))}>Add Cart</button>
    </li>
  ));

  return (
    <>
      <h2>Veg items..</h2>
      <ul>{items}</ul>
    </>
  );
}

export default Veg;
