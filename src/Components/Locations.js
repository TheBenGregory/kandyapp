import React, { useEffect, useState } from "react"

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
              {
                locations.map(
                    (location) => {
                        return <p key={`location--${location.id}`}>{location.city}</p> }
                )  
                } 
            
            </article>
            </>
)
}