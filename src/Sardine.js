import React from 'react';
import { Link } from "react-router-dom";


function Sardine () {
    return (
        <div className="text-center m-5 container">
            <div>
                <h1>You don't eat the sardine they eat you</h1>
                <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
            </div>
        </div>
    )
}

export default Sardine