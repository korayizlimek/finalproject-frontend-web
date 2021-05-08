import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({
    imageUrl,
    name,
    price,
    productId,
    addToCartHandler,
}) => {
    return (
        <div className="product">
            <div className="product__info">
                <img src={imageUrl} alt={name} />

                <p className="info__name">{name}</p>
                <p className="product__description">
                    Acili Adana Kebap - Erkek Kuzu etinden yapilmistir
                </p>
                <p className="info__price">{price}</p>
                <Link
                    to={`/product/${productId}`}
                    className="info__button"
                >
                    incele
                </Link>

                <button
                    type="submit"
                    className="product__button"
                    onClick={() => addToCartHandler(productId)}
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default Product;
