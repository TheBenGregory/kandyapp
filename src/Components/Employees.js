import React, { useEffect, useState } from "react"

export const Employees = () => {
    const [employees, changeEmployee] = useState([])
  

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )


    return (
        <>
        <h2>Employee List</h2>
            <div>
            
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
