import React from "react";
import Dropdown from "./Dropdown";
import "../../asin5-mainbody/styles/Form.css";

const Form = () => {
	return (
		<div className="holder">
			<div className="border-form">
				<p className="application">Application</p>
				<div>
					<p className="first-name">First Name</p>
					<input
						type="text"
						placeholder="First Name"
						className="input"
					/>
				</div>
				<div>
					<p className="last-name">Last Name</p>
					<input
						type="text"
						placeholder="Last Name"
						className="input"
					/>
				</div>
				<div>
					<p className="email">Email address</p>
					<input
						type="email"
						placeholder="Email Name"
						className="input"
					/>
				</div>
				<div>
					<p className="linkedin">Linkedin</p>
					<input
						type="text"
						placeholder="Linkedin"
						className="input"
					/>
				</div>
				<div>
					<p className="founder">What type of founder are you?</p>
					<Dropdown
						options={["Tech", "Tech", "Tech"]}
						placeholder="Tech"
					/>
					<p className="founder-2">
						{" "}
						What area are you interested in building startup?
					</p>
					<Dropdown
						options={["SAAS", "SAAS", "SAAS"]}
						placeholder="SAAS"
					/>
					<p className="founder-3">
						What is your current work situation?
					</p>
					<Dropdown
						options={["Employed", "Unemployed"]}
						placeholder="Employed"
					/>
				</div>
				<div>
					<p className="business">
						Do you alredy have buisness idea?
					</p>
					<input
						type="text"
						placeholder="Answer..."
						className="business2"
					/>
				</div>
				<div>
					<p className="company">
						Why do you want to start a company with Asin5 rather
						than by yourself?
					</p>
					<input
						type="text"
						placeholder="Answer..."
						className="company2"
					/>
				</div>
				<div>
					<p className="companies">
						What are the companies(excluding the partof SINC
						Partners) you have seen recently that you felt you could
						have been a founder or would have wanted to join from
						the start?
					</p>
					<input
						type="text"
						placeholder="Answer..."
						className="companies2"
					/>
				</div>
				<div>
					<button className="application-btn">SUBMIT APPLICATION</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
