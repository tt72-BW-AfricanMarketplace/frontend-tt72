import React from "react";
import Form from "../../shared/Form";
import styled from "styled-components";
import layout from "../../layout";
const { Container } = layout;

const FormContainer = styled(Container)`
	background-color: var(--pDark);
	width: 80%;
	border-radius: 20px;
	margin: 1rem auto;
	text-align: center;
`;

const ReportIncident = props => {
	const fields = [
		{
			name: "name",
			type: "text",
			placeholder: "name",
		},
		{
			name: "description",
			type: "textarea",
			placeholder: "description",
		}
	];

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<FormContainer>
			<Form fields={fields} handleSubmit={handleSubmit} />
		</FormContainer>
	)
};

export default ReportIncident;