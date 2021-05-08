import "./CartScreen.css";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import {
    addToCart,
    removeFromCart,
    resetCart,
} from "../redux/actions/cartActions";
import { useEffect, useState } from "react";

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems.reduce(
            (price, item) => item.price * item.qty + price,
            0
        );
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log("This will run every second!");
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    // const dispatch = useDispatch();

    const [check, setCheck] = useState(false);

    const history = useHistory();
    const handlerCheck = () => {
        setCheck(true);
        const interval = setInterval(() => {
            clearInterval(interval);
            dispatch(resetCart());
            history.push("/");
        }, 3000);
    };

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                {check ? (
                    <h2>Ödeme Tamamlandı. Sparişiniz hazırlanıyor</h2>
                ) : (
                    <>
                        <h2>Shopping Cart</h2>
                        {cartItems.length === 0 ? (
                            <div>
                                Your cart is empty{" "}
                                <Link to="/">Go Back</Link>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem
                                    item={item}
                                    qtyChangeHandler={qtyChangeHandler}
                                    removeFromCart={removeHandler}
                                />
                            ))
                        )}
                    </>
                )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Toplam ({getCartCount}) ürün</p>
                    <p>{getCartSubTotal().toFixed(2)}</p>
                </div>

                <div>
                    <button onClick={handlerCheck}>Odemeyi Tamamla</button>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;
