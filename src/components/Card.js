import React, { useState } from "react";
import burgerImage from "./image/burger1.jpg"; 


const Card = (props) => {
    const { card, buttonClickHandler } = props;
    const [order, setOrder] = useState([]);

    const addToOrderHandler = () => {
      
        setOrder([...order, card]);
    };

    return (
        <div className="card mb-4 col-md-4">
            <img className="card-img-top" src={burgerImage} alt={burgerImage} />
  
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <p className="card-text">{card.cost}</p>
                
            </div>
            <div className="card-footer text-center">
               
                <button className="btn btn-success btn-block" onClick={addToOrderHandler}>
                    Add to Order
                </button>
            </div>
        </div>
    );
};

export default Card;

