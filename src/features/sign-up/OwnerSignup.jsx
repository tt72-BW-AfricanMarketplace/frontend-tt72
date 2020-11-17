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

const BuyerSignup = (props) => {
	return (
		<form>
			<input type="text" name="username" value={""} />
			<input type="email" name="email" value={""} />
			<input type="password" name="password" value={""} />
			<input type="text" name="companyName" value={""} />
		</form>
	);
};

export default BuyerSignup;