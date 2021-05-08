import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserMe, signoutUser } from "../redux/actions/userAction";

const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    const { user } = useSelector((state) => state.user);

    const history = useHistory();
    const dispatch = useDispatch();
    const handlerOut = () => {
        dispatch(signoutUser());
        history.push("/");
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__title">
                {/* <img
                    className="header__logo"
                    src={logo}
                    alt="../doc/pngegg.png"
                /> */}
                <h3>BitirmeProjesi</h3>
            </div>

            {/* Links */}
            <ul className="navbar__links">
                <li>
                    {user.length < 1 ? (
                        <Link to="/login">
                            <div className="cart__link">
                                <span className="header__optionBottom">
                                    Giriş Yap
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <div className="cart__link">
                            <span
                                onClick={handlerOut}
                                className="header__optionBottom"
                            >
                                <i class="far fa-user">{user.name}</i>
                            </span>
                        </div>
                    )}
                </li>
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        Sepete Git
                        <span className="cartlogo__badge">
                            {getCartCount()}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                        <i class="fas fa-utensils fa-lg"></i>
                        Menu
                    </Link>
                </li>
            </ul>

            {/* Hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
