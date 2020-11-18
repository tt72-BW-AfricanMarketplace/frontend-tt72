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
};

const BuyerSignup = (props) => {
	const [values, handleChanges, clearForm, errors] = useForm(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		clearForm();
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label>
				Username
			<Input
					type="text"
					name="username"
					value={values.username}
					onChange={handleChanges}
				/>
			</label>

			<label>
				Email
			<Input
					type="email"
					name="email"
					value={values.email}
					onChange={handleChanges}
				/>

			</label>

			<label>
				Password
				<Input
					type="password"
					name="password"
					value={values.password}
					onChange={handleChanges}
				/>
			</label>

			<Button> Submit </Button>
			{/* <div className="errors">
				<div>{errors.username}</div>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
			</div> */}
		</StyledForm>
	);
};

export default BuyerSignup;