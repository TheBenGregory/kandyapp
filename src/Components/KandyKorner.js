import { Customers } from "./Customers.js"
import { Employees } from "./Employees.js"
import { Locations } from "./Locations.js"
import { Orders } from "./Orders.js"

export const KandyKorner = () => {
    return (
        <>
            {console.log("JSX rendered")}
            <h1>Kandy Korner</h1>
            <Customers />
            <Employees />
            <Locations />
            <Orders />
            
        </>
    )
}
 