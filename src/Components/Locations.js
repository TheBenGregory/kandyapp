import React, { useEffect, useState } from "react"
import './Locations.css';

export const Locations = () => {
    const [locations, assignLocation] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    assignLocation(locationArray)
                }
            
                )
        },
        []
    )


return (
    <>
        
    <article className="locations">
                <h2>Locations</h2>
                <ul>
              {
                locations.map(
                    (location) => {
                        return <li key={`location--${location.id}`}>{location.city}</li> }
                )  
                } 
            </ul>
            </article>
            </>
)
}