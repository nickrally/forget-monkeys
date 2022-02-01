import React from 'react';
import { Link } from "react-router-dom";
import MonkeyThumb from './images/monkeyThumb.png'
import Placeholder from './images/placeholder.png'
import './HomePage.css'

const HomePage = () =>{
    return (
        <div className="row">
          <figure className="column">
          <Link to={"/monkeys"}>
            <img src={MonkeyThumb}  />
            </Link>
        </figure>
        <figure className="column">
            <img src={Placeholder}  />
        </figure>
          <figure className="column">
            <img src={Placeholder}  />
        </figure>
        </div>
    )
}
export default HomePage;