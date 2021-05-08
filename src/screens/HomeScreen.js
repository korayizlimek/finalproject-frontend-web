import "./HomeScreen.css";

// Components
import Product from "../components/Product";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId, 1));
    };

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Yemek Listesi</h2>

            <div className="homescreen__products">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error} </h2>
                ) : (
                    products.map((product) => (
                        <Product
                            key={product._id}
                            productId={product._id}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            addToCartHandler={addToCartHandler}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default HomeScreen;
