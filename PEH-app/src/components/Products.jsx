





import products from "../data/products";
import { Link } from "react-router-dom"



function Products({ typeFilter }) {

    const showMore = (id) => {
        console.log(id)
    }
    
    return (
        <>
            <div className="products">
                {products
                .filter(product => typeFilter ? product.type === typeFilter : true)
                .map(product => {
                    return (
                        <Link to={`/${product.id}`}>
                            <div className="products__product-card" onClick={()=>showMore(product.id)}>
                                <img src={`${product.img}`} alt="kallos" />
                                    <div className="products__product-card__text">
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

export default Products;