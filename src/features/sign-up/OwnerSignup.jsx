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
	companyName: "",
};


// const OwnerSignup = (props) => {
// 	const [values, handleChanges, errors] = useForm(initialState);
// }

const BuyerSignup = (props) => {
	return (
		<form>
			<label>
				Username
				<Input
					type="text"
					name="username"
				// value={values.username}
				// onChange={handleChanges}
				/>
			</label>

			<label>
				Email
				<Input
					type="email"
					name="email"
					value={""}
				// value={values.email}
				/>
			</label>

			<label>
				Password
				<Input
					type="password"
					name="password"
					value={""}
				/>
			</label>

			<label>
				Company Name
				<Input
					type="text"
					name="companyName"
					value={""}
				/>
			</label>

			<Button> Submit </Button>
			{/* <div className="errors">
				<div>{errors.username}</div>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
			</div> */}

		</form>
	);
};

export default BuyerSignup;