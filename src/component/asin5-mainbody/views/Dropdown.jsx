import React, { useState } from "react";
import "../../asin5-mainbody/styles/Dropdown.css";

const Dropdown = ({ options, placeholder }) => {
	const [isOpen, setIsOpen] = useState(false);
	// const [selectedOption, setSelectedOption] = useState("");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = (option) => {
		setIsOpen(false);
	};
	const containerStyle = {
		marginBottom: isOpen ? '100px' : '0',
	  };

	return (
		<div className="input-container" style={containerStyle}>
			<input
				type="text"
				placeholder={placeholder}
				readOnly
			/>
			<div className="dropdown-indicator" onClick={toggleDropdown}>
				&#9662;
			</div>
			{isOpen && (
				<div className="dropdown">
					<ul>
						{options.map((option, index) => (
							<li
								key={index}
								onClick={() => selectOption(option)}
							>
								{option}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
