import React from "react";
import "../../asin5-footer/styles/Footer.css";
import LineStyle from "./Linestyle";
import logo from "../../../../src/assets/sincLogo2.svg";
import Logo from "../../../assets/accreditedLogo.svg";
import VerticalLine from "../views/VerticalLine";
import LineStyle2 from "./LineStlye2";
import Logo3 from "../../../assets/gasusLogo.svg";
import nigeria from "../../../assets/nigeria.svg";
import Logo4 from "../../../assets/socialLogo.svg";
import whatsapp from "../../../assets/whatsapp.svg";

const Footer = () => {
	return (
		<div className="main-body">
			<div className="newsletter-div">
				<p className="newsletter">NewsLetter</p>
			</div>
			<div className="latest-wirteup-div">
				<p className="latest-wirteup">
					Get the latest about SINC Partner, our startup Incubator
					program, Portfolio company offerings-staignt into your inbox
				</p>
			</div>
			<div className="email-div">
				<input
					type="email"
					className="email-input"
					placeholder="Enter your email address"
					required
				/>
				<button className="subscribe">subscribe</button>
			</div>
			<LineStyle />
			<div className="footer-holder">
				<div>
					<img src={logo} alt="The logo" className="logo" />
					<p className="sinc-writeup">
						SINC Patners Lab is a SaaS building and a <br />
						Marketing Tech startup studio <br />
						platform-based products <br />
						for a solution-providers and <br />
						enterpreneurs that will help <br />
						democratize success
					</p>
				</div>
				<div>
					<p className="all-caps">Platforms</p>
					<p className="all-small">Kofoundme</p>
					<p className="all-small">Inresidence</p>
					<p className="all-small">Service Market</p>
					<p className="all-small">Founders School</p>
					<p className="all-small">Metty</p>
					<p className="all-small">Grantty</p>
					<p className="all-small">Blodtell</p>
					<p className="all-small">Chekwa</p>
				</div>
				<div>
					<p className="all-caps">Initiatives</p>
					<p className="all-small">Jabi Plains</p>
					<p className="all-small">Local Pricing Initiative</p>
					<p className="all-small">Scholarship Program</p>
					<p className="all-small">SSMN Pricing</p>
					<p className="all-small">University STEM</p>
					<p className="all-small">University InResidency</p>
					<p className="all-small">1M Nigeria <img src={nigeria} alt="logo"/> Products</p>
					<p className="all-small">Founders Festival</p>
				</div>
				<div>
					<p className="all-caps">About Us</p>
					<p className="all-small">Who We Are</p>
					<p className="all-small">Our people</p>
					<p className="all-small">Concept Inovation</p>
					<p className="all-small">Our Process</p>
					<p className="all-small">Investors Network</p>
					<p className="all-small">CSR & Events</p>
					<p className="all-small">Career</p>
					<p className="all-small">Contact</p>
				</div>
				<div>
					<p className="all-caps">More</p>
					<p className="all-small">Services</p>
					<p className="all-small">Equity job</p>
					<p className="all-small">EIR Program</p>
					<p className="all-small">Offers</p>
					<p className="all-small">Innovation News</p>
					<p className="all-small">FAQ</p>
					<p className="all-small">Blog & Resources</p>
					<p className="all-small">Press</p>
				</div>
				<VerticalLine />
				<div className="location-div">
					<p className="all-caps">Location</p>
					<p className="all-small">Abuja, Nigeria</p>
					<p className="all-small">Lagos, Nigeria</p>
					<p className="all-small">Philadelphia, USA</p>
					<div className="accredited-holder">
						<img
							src={Logo}
							alt="accredited Logo"
							className="accredited"
						/>
						<img src={whatsapp} alt="whatsapp logo" className="whatsapp"/>
					</div>
				</div>
			</div>
			<LineStyle2 />
			<div className="gurantee-mainholder">
				<div className="guarantee-holder">
					<p className="guarantee-text">
						Guaranteed 2x on your service or cash investment,
						usually been the first to invest.
						<span className="styled-span">
							Get in early, get the SINC
						</span>
					</p>
					<p className="partnet-text">Patners Guaranty!</p>
				</div>
				<div className="gasus-logo">
					<div>
						<img
							src={Logo3}
							alt="gasus logo"
							className="gasus-style"
						/>
					</div>
					<div>
						<p className="christin-writeup">
							We are business built on the foundation of
							Chiratians value and belief
						</p>
						<img
							src={Logo4}
							alt="social logo"
							className="social-logo"
						/>
					</div>
				</div>
			</div>
			<div className="copyright-holder">
				<div>
					<p className="copyright">
						&copy; 2023 SINC Partner Lab Ltd. All rights reserved
					</p>
				</div>
				<ul className="privacy-holder">
					<li>
						<a href="pivacy" className="priavcy-styling">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="terms" className="priavcy-styling">
							Terms of Service
						</a>
					</li>
					<li>
						<a href="security" className="priavcy-styling">
							Security
						</a>
					</li>
				</ul>
			</div>
			<div className="web-holder">
				<p className="web-nigeria">Web in Nigeria</p>
				<img
					src={nigeria}
					alt="nigerialogo"
					className="nigieria-logo"
				/>
			</div>
		</div>
	);
};

export default Footer;
