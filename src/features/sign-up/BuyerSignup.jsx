import React from "react";
import useForm from "../../hooks/useForm";
import Input from "../shared/Input";
import styled from "styled-components";
import layout from "../layout";
const { Button } = layout;

const StyledForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const initialState = {
	username: "",
	email: "",
	password: "",
}

const BuyerSignup = (props) => {
	const [values, handleChanges, clearForm] = useForm(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		clearForm();
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Input type="text" name="username" value={values.username} onChange={handleChanges} />
			<Input type="email" name="email" value={values.email} onChange={handleChanges} />
			<Input type="password" name="password" value={values.password} onChange={handleChanges} />
			<Button>Submit</Button>
		</StyledForm>
	);
};

export default BuyerSignup;