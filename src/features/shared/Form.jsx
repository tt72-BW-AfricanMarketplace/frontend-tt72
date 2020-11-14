import React from "react";
import useForm from "../../hooks/useForm";
import Input from "./Input";

const Form = ({ fields, handleSubmit }) => {
	let initState = {};
	fields.forEach(field => initState[field.name] = field.initVal ? field.initVal : "");
	const [values, handleChanges, clearForm] = useForm(initState);
	const handleSubmitLocal = (evt) => {
		evt.preventDefault();
		handleSubmit(values);
		clearForm();
	}
return (
	<form onSubmit={handleSubmitLocal}>
		{
		fields.map(field => {
			const { name, type, placeholder, className } = field;
			return (
				<Input 
				name={name} 
				type={type ? type : "text"} 
				placeholder={placeholder ? placeholder : name} 
				className={className ? className : ""} 
				value={values[name]} 
				onChange={handleChanges} />);
		})
	}
		<button>Submit</button>
	</form>
	);
};

export default Form;