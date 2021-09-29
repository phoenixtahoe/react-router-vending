import React from 'react';
import { Link } from "react-router-dom";


function Drink () {
    return (
        <div className="text-center m-5 container">
            <h1><strong>SODAAAAAA</strong></h1>
            <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
        </div>
      );
}

export default Drink