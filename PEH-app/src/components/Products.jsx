





import products from "../data/products";




function Products({ typeFilter }) {
    return (
        <>
            <div className="products">
                {products
                .filter(product => typeFilter ? product.type === typeFilter : true)
                .map(product => {
                    return (
                        <div className="products__product-card">
                            <img src={`${product.img}`} alt="kallos" />
                                <div className="products__product-card__text">
                                    <h2>{product.name}</h2>
                                    <p>{product.type}</p>
                                </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products;