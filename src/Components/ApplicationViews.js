import React from "react"
import { Route } from "react-router-dom";
import { Product } from "./Products.js";
import { Locations } from "./Locations.js"  

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <Locations />
            </Route>
            <Route path="/products">
                <Product />
            </Route>
        </>
    )
}