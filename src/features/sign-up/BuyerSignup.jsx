import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { signup } from "./signupSlice";
import { signup } from "../../app/store/slices/userSlice";
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
	div.Input-pair{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: 30rem;
		input {
			width: 20rem;
		}
	}
`;

const initialState = {
	username: "",
	email: "",
	password: "",
};

const BuyerSignup = (props) => {
	const [values, errors, disabled, handleChanges, clearForm] = useFormError(initialState, schema)
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);
	const { push } = useHistory();

	useEffect(() => {
		if (isLoggedIn) {
			push("/info-portal");
		}
	}, [isLoggedIn, push])

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(signup(values));
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

			<Button disabled={disabled}> Submit </Button>
			<div className="errors">
				<div>{errors.username}</div>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
			</div>
		</StyledForm>
	);
};

export default BuyerSignup;