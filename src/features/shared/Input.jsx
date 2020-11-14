import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, type, placeholder, onChange, className, value, children, label, ...props }) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} className={className} {...props} />
		</>
	)
};

Input.defaultProps = {
	type: "text",
	className: "",
};
Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["text", "number", "password", "email"]),
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
};

export default Input;