





import products from "../data/products";
import { Link } from "react-router-dom"



function ProductsList({ typeFilter, searchParams }) {

    return (
        <>
            <div className="products-list">
                {products
                .filter(product => typeFilter ? product.type === typeFilter : true)
                .map(product => {
                    return (
                        <Link key={product.id} to={`/products/${product.id}`} state={{ search: searchParams.toString() }}>
                            <div className="products-list__product-card">
                                <img src={`${product.img}`} alt="kallos" />
                                <div className="products-list__product-card__text">
                                    <h2>{product.name}</h2>
                                    <p>{product.type}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ProductsList;