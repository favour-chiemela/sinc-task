import React from "react";
import "../../asin5-mainbody/styles/Form.css";

const Form = () => {
	return (
		<div className="holder">
			<div className="border-form">
				<p className="application">Application</p>
				<div>
					<p className="first">first Name</p>
					<input type="text" placeholder="first Name" className="input"/>
				</div>
				<div>
					<p className="first">Last Name</p>
					<input type="text" placeholder="Lirst Name" className="input"/>
				</div>
				<div>
					<p className="first">Email address</p>
					<input type="email" placeholder="Email Name" className="input"/>
				</div>
				<div>
					<p className="first">Linkedin</p>
					<input type="text" placeholder="Linkedin" className="input"/>
				</div>
				{/* <div>
					<p>first Name</p>
					<input type="text" placeholder="first Name" />
				</div> */}
			</div>
		</div>
	);
};

export default Form;
