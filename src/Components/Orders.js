import React, { useEffect, useState } from "react"

export const Orders = () => {
    const [orders, assignOrder] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/orders")
                .then(res => res.json())
                .then((orderArray) => {
                    assignOrder(orderArray)
                }
            
                )
        },
        []
    )


return (
    <>
        
    <article className="orders">
                <h2>Orders </h2>
                <div>
            
            </div>
            {
                orders.map(
                    (order) => {
                        return <p key={`order--${order.id}`}>{order.productsPurchased}</p>
                    }
                )
            }
                
            
            </article>
            </>
)
}