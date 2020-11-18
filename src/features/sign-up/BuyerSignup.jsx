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
	div.Input-pair{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: 30rem;
	}
`;

const initialState = {
	username: "",
	email: "",
	password: "",
};

const BuyerSignup = (props) => {
	const [values, handleChanges, clearForm] = useForm(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
		clearForm();
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<div className="Input-pair">
				<label htmlFor="username" >
					Username
			</label>
				<Input
					type="text"
					id="username"
					name="username"
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

			<div className="Input-pair">
				<label htmlFor="password">
					Password
			</label>

				<Input
					type="password"
					id="password"
					name="password"
					value={values.password}
					onChange={handleChanges}
				/>
			</div>

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