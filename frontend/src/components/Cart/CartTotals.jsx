import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { message } from "antd";
import { CartContext } from "../../context/CartProvider";

const CartTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const { cartItems } = useContext(CartContext);
  const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handlePayment = async () => {
    if (!user) {
      message.info("Please login to proceed to checkout");
    }
    const body = {
      products: cartItems,
      user: user,
      cargoFee: fastCargoChecked ? 15 : 0,
    };

    try {
      const stripe = await loadStripe(stripePublicKey);
      const res = await fetch(`${apiUrl}/api/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        message.error("Payment failed");
      }
      const session = await res.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(result);
      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(body);
  };

  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price * item.quantity;

    return itemTotal;
  });

  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const cargoFee = 15;

  const cartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  return (
    <div className="cart-totals">
      ,<h2>Cart totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">${cartTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg" onClick={handlePayment}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
