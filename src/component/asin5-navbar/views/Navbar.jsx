import React from "react";
import "../styles/Navbar.css";
import logo from "../../../../src/assets/sincLogo.svg";

const Navbar = () => {
	return (
		<div className="img-ul-stlye">
			<img src={logo} alt="The logo" className="logo" />
			<ul className="navbar-ul">
				<li>
					<a href="about" className="navbar-link">
						About
					</a>
				</li>
				<li>
					<a href="sip" className="navbar-link">
						SIP
					</a>
				</li>
				<li>
					<a href="studio" className="navbar-link">
						Studio
					</a>
				</li>
				<li>
					<a href="seeq" className="navbar-link">
						SEEQ
					</a>
				</li>
				<li>
					<a href="platforms" className="navbar-link">
						Platforms
					</a>
				</li>
				<li>
					<a href="initiatives" className="navbar-link">
						Initiatives
					</a>
				</li>
				<li>
					<a href="more" className="navbar-link">
						More
					</a>
				</li>
			</ul>
			<div className="button-holder">
				<button className="SINC">SINC With Us</button>
				<button className="Apply">Apply to SIP 1.0</button>
			</div>
		</div>
	);
};

export default Navbar;
