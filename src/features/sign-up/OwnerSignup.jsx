import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../app/store/slices/userSlice";
// import { signup } from "./signupSlice";
import useFormError from "../../hooks/useFormError";
import Input from "../shared/Input";
import styled from "styled-components";
import layout from "../layout";
import schema from "./signupScheme";
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
	companyName: "",
};


// const OwnerSignup = (props) => {
// 	const [values, handleChanges, errors] = useForm(initialState);
// }

const OwnerSignup = (props) => {
	const [values, errors, disabled, handleChange, clearForm] = useFormError(initialState, schema)
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(signup({ email: values.email, password: values.password }));
		clearForm();
	}

	const handleChanges = (evt) => {
		handleChange(evt);
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor="username">Username</label>
			<Input
				type="text"
				name="username"
				value={values.username}
				onChange={handleChanges}
			/>

			<label htmlFor="email">Email</label>
			<Input
				type="email"
				name="email"
				value={values.email}
				onChange={handleChanges}
			/>

			<label htmlFor="password">Password</label>
			<Input
				type="password"
				name="password"
				value={values.password}
				onChange={handleChanges}
			/>

			<label htmlFor="companyName">Company Name</label>
			<Input
				type="text"
				name="companyName"
				value={""}
			/>

			<Button disabled={disabled}>Submit</Button>

			<div className="errors">
				<div>{errors.username}</div>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
				<div>{errors.companyName}</div>
			</div>

		</StyledForm>
	);
};

export default OwnerSignup;