import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cimg from "./Chips.png";


function Food() {

    const [bags, setBags] = useState([]);
  
    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBags(prevBags => [...prevBags, { x, y }]);    
    }
  
    const b = bags.map((bag, i) => (
      <img
        key={i}
        src={cimg}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      />
    ));
    return (
      <div className="text-center m-5 container">
            <h1>bags eaten: {bags.length}</h1>
            <button className="btn btn-primary" onClick={handleClick}>nom nom nom</button>
            <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
            {b}
      </div>
    );
  }
export default Food