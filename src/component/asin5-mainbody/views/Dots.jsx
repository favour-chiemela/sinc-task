import React from "react";
import "../../asin5-mainbody/styles/Dots.css"
const Dots = ({ children }) => {
	return (
		<div className="dots-container">
		{React.Children.map(children, (child, index) => (
		  <div key={index} className="dots-line">
			<span className="dot" />
			<span className="text">{child}</span>
		  </div>
		))}
	  </div>
	);
};

export default Dots;
