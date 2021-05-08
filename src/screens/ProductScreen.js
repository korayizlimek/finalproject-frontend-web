import "./ProductScreen.css";

// Redux
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addToCart } from "../redux/actions/cartActions";
import { getProductDetails } from "../redux/actions/productActions";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(
        (state) => state.getProductDetails
    );
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/");
    };

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img
                                src={product.imageUrl}
                                alt="productname"
                            />
                        </div>

                        <div className="left__info">
                            <p className="info__name">
                                {product.name}
                            </p>
                            <p className="info__price">
                                {product.price} TL
                            </p>
                            <p className="info__description">
                                {product.description}
                            </p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Fiyat: <span>{product.price}</span>
                            </p>
                            <p>
                                Durum:{" "}
                                <span>
                                    {product.countInStock > 0
                                        ? "Mevcut"
                                        : "Mevcur Degil"}
                                </span>
                            </p>
                            <p>
                                Adet
                                <select
                                    valut={qty}
                                    onChange={(e) =>
                                        setQty(e.target.value)
                                    }
                                >
                                    {[
                                        ...Array(
                                            product.countInStock
                                        ).keys(),
                                    ].map((x) => (
                                        <option
                                            key={x + 1}
                                            value={x + 1}
                                        >
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button
                                    type="button"
                                    onClick={addToCartHandler}
                                >
                                    Sepete Ekle
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductScreen;
