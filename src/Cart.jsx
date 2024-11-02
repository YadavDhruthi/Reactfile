import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "./store";
import { useState } from "react";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const[couponDiscountPercentage,setCouponDiscountPercentage]=useState(0);

    
    const handleApplyDiscount = (percentage) => {
        setDiscountPercentage(percentage);
    };
    const handleApplyCoupon = () => {
        switch(couponCode){
            case 'RATAN10':
        setCouponDiscountPercentage(10);
        break;
        case 'RATAN20':
            setCouponDiscountPercentage(20);
            break;
            default:
                alert('invalid coupon code');
                setCouponDiscountPercentage(0);

                

        }
    };


    const calculateTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountAmount = (total * discountPercentage) / 100;
        const couponDiscountAmount = (total * couponDiscountPercentage) / 100;
         const finalTotal = total - discountAmount-couponDiscountAmount;

        return {
            total: parseFloat(total.toFixed(2)),
            discountAmount: parseFloat(discountAmount.toFixed(2)),
            couponDiscountAmount: parseFloat(couponDiscountAmount.toFixed(2)),
           finalTotal: parseFloat(finalTotal.toFixed(2)),
        };
    };

    const { total, discountAmount, finalTotal,couponDiscountAmount } = calculateTotal();

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>The cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.name}>
                            {item.name} - ${item.price} - Quantity: {item.quantity}
                            
                            <button onClick={() => dispatch(increment({ name: item.name }))}>+</button>
                            <button onClick={() => dispatch(decrement({ name: item.name }))}>-</button>
                            <button onClick={() => dispatch(remove({ name: item.name }))}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div>
              <p>Total before dicounts:${total}</p>
                <button onClick={() => handleApplyDiscount(10)}>Apply 10% Discount</button>
                <button onClick={() => handleApplyDiscount(20)}>Apply 20% Discount</button>
                <button onClick={() => handleApplyDiscount(30)}>Apply 30% Discount</button>
            </div>
            <div>
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                />
                <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>

            <p>Discount Percentage Applied: ${discountPercentage}%</p>
            <p>Discount Amount: ${discountAmount}</p>
            <p>Final Amount after Discount: ${finalTotal}</p>
            <p>Coupon Discount Amount: ${couponDiscountAmount}</p>

        </div>
    );
}

export default Cart;

