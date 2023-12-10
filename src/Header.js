
import React from "react";
const Header = (props) => {
  return (
    <header
      className={`container-fluid bg-${
        props.bgColor 
      } text-white pt-5 pb-5`}
    >
      <div className="container">
        <h2>{props.text && props.text}</h2>
       
      </div>
    </header>
  );
};
export default Header;