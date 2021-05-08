import { Link } from "react-router-dom";
import "./SideDrawer.css";

import { useSelector } from "react-redux";

function SideDrawer({ show, click }) {
    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce(
            (qty, item) => qty + Number(item.qty),
            0
        );
    };

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart" className="sidedrawer__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Sepete Git{" "}
                            <span className="sidedrawer__cartbadge">
                                {getCartCount()}
                            </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sidedrawer__link">
                        <i class="fas fa-utensils fa-lg"></i>
                        <span>Menu</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideDrawer;
