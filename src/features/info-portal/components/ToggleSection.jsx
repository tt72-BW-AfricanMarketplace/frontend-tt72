import React, { useState } from "react";
import styled from "styled-components";
import layout from "../../layout";
const { Heading } = layout;

export const HideAndSeek = styled.div`
	display: ${pr => pr.shown ? "block" : "none"};
`;


const SFieldset = styled.fieldset`
	display: inline-flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	width: 100%;
	div.radio-opt {
		width: 180px;
		height: 40px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		label {
			font-size: 1.6rem;
		}
	}
`;

const RadioGroup = ({ groupName, fields, handler }) => {
	const [selected, setSelected] = useState("");

	const handleClick = (evt) => {
		const { name, value } = evt.target;
		setSelected(value);
		handler(evt);
	};

	const formatFieldName = (str) => {
		const toReturn = str.split("-").join(" ").charAt(0).toUpperCase()
			+ str.slice(1).split("-").join(" ")
			|| str;
		return toReturn;
	}

	return (
		<SFieldset id={groupName}>
			{
				fields.map(field => {
					return (
						<div className="radio-opt" key={groupName + "-" + field}>
							<input type="radio" name={groupName} id={field} value={field} checked={selected === field} onChange={handleClick} />
							<label htmlFor={field}>{formatFieldName(field)}</label>
						</div>
					);
				})
			}
		</SFieldset>
	);
}

const Wrap = styled.div`
	display: ${props => props.shown ? "flex" : "none"};
	margin: 1rem auto;
	height: 150px;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: space-between;
	width: 80%;
	background-color: var(--pDark);
`;

const InnerSection = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;
`;

const ToggleSection = ({ shown, sectionTitle, groupName, fields, handler, children }) => {
	return (
		<Wrap shown={shown}>
			<InnerSection>
				<Heading h5>{sectionTitle}</Heading>
				{children}
				<RadioGroup groupName={groupName} fields={fields} handler={handler} />
			</InnerSection>
		</Wrap>
	);
};


export default ToggleSection;