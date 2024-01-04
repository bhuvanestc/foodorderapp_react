import React from 'react';
import {useCart} from "react-use-cart";
import { useTheme } from '../ThemeContext';

const Itemcard = (props) => {
    const { theme} = useTheme();
    const{addItem}=useCart();
    
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#444' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333'
  };
    return (
        
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"  style={cardStyle}>
            <div class ="card p-0 overflow-hidden h-100 shadow">
            <img src={props.img} class="card-img-top img-fluid"/ >
            <div class="card-body text-center">
            <h5 class="card-title">{props.title}</h5>
            <h5 class="card-text"> sek{props.price}</h5>
            <p class="card-text"> {props.desc}</p>
            <button class="btn btn-success"
            onClick={()=> addItem(props.item)}
            >Add to Order</button>
            </div>
            </div>
            </div>
            
            
        
    );
};

export default Itemcard;