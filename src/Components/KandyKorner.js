
import { NavBar } from "./nav/NavBar.js"
import { ApplicationViews } from "./ApplicationViews.js"
export const KandyKorner = () => {
    return (
        <>
            {console.log("JSX rendered")}
            <NavBar />
            <h1>Kandy Korner</h1>
            <ApplicationViews />
        </>
    )
}
 