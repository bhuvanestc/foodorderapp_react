import React from "react";
import Card from "./Card";

const Advertisements = (props) => {
const handleButtonClick = (input) => {
        alert('Contact:' + input);
    }
return (
    <div id="advertisements" class="row">
    {
        props.list.map(card => (<Card  card={card} buttonClickHandler={handleButtonClick} />))
    }
    </div>
  );
};

export default Advertisements;