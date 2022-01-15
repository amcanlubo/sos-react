import { Route, Navigate } from "react-router";
import { useLocation } from 'react-router'

const Home = () => {

    let location = useLocation()
    console.log(location.headers)
    // if(!userData){
    //     return <Navigate to="/" />
    // }

    return (
        <div>
            <p>render Home</p>
        </div>
    )
}

export default Home
