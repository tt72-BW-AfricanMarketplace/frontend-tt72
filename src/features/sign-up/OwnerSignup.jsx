import React from "react";
import useFormError from "../../hooks/useFormError";
import Input from "../shared/Input";
import styled from "styled-components";
import layout from "../layout";
import schema from "./OwnerSignupSchema"
// import { createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";

const { Button } = layout;

const StyledForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	div.Input-pair{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: 30rem;
		input{
			width: 20rem;
		}
	}
`;
const initialState = {
	username: "",
	email: "",
	password: "",
	companyName: "",
};

const OwnerSignup = (props) => {
	// const [values, handleChanges, clearForm] = useForm(initialState);
	const [values, errors, disabled, handleChange, clearForm] = useFormError(initialState, schema)

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		console.log(errors)
		clearForm();
	};
	// const OwnerSignup = (props) => {
	// 	const [values, handleChanges, errors] = useForm(initialState);
	// }

	const handleChanges = evt => {
		handleChange(evt);
		console.log(values);
		console.log(errors);
	}


	return (
		<StyledForm onSubmit={handleSubmit}>
			<div className="Input-pair">
				<label htmlfor="username">
					Username
					</label>
				<Input
					type="text"
					id="username"
					name="usernamw"
					value={values.username}
					onChange={handleChanges}
				/>
			</div>

			<div className="Input-pair">
				<label htmlFor="email">
					Email
				</label>
				<Input
					type="email"
					id="email"
					name="email"
					value={values.email}
					onChange={handleChanges}
				/>
			</div>

			<div classname="Input-pair">
				<label htmlFor="password">
					Password
				</label>
				<Input
					type="password"
					id="password"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
			</div>

			<div className="Input-pair">
				<label htmlFor="companyname">
					Company Name
						</label>
				<Input
					type="text"
					id="companyname"
					name="companyname"
					value={values.companyname}
					onChange={handleChange}
				/>
			</div>

			<Button disabled={disabled}> Submit </Button>
			<div className="errors">
				<div>{errors.username}</div>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
			</div>

		</StyledForm>
	);
};



export default OwnerSignup;