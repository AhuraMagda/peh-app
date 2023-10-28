

import { useParams, Link } from "react-router-dom";
import products from "../data/products"

function ProductCard() {

    const params = useParams();

    const product = products.find(p => p.id === +params.product)

    return (
        <>
            
            <main className="product">
                <Link to=".." relative="path">back</Link>
                <img src={product.img} />
                <h2>{product.name}</h2>
                <p>{(product.ingredients).join(", ")}</p>
            </main>
        </>
    )
}

export default ProductCard;