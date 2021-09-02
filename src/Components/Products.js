import React, { useEffect, useState } from "react"
import './Products.css';

export const Product = () => {
    const [products, assignProduct] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then((productArray) => {
                    assignProduct(productArray)
                }
            
                )
        },
        []
    )

return (
    <>
        
    <article className="products">
                <h2>Products</h2>
                <div>

            </div>
            <ul>
            {
                products.map(
                    (product) => {
                        return <li key={`product--${product.id}`}>{product.name}: Product ID #{product.id} Price: ${product.price.toFixed(2)} Candy Type: {product.productType.type}</li>
                    }
                )
            }
                </ul>
            
            </article>
            </>
)
}