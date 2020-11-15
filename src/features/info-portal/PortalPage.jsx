import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import layout from "../layout";
const { Heading } = layout;

const RadioGroup = ({ groupName, fields }) => {
	return (
		<form>
			<Heading h5>Please select a {groupName}</Heading>
			{
				fields.map(field => {
					return (
						<React.Fragment key={groupName + "-" + field}>
							<input type="radio" name={groupName} id={field} value={field} />
							<label htmlFor={field}>{field}</label>
						</React.Fragment>
					)
				})
			}
		</form>
	);
}

const PortalPage = props => {
	return (
		<>
			<Header />
			<Heading h1>Info Portal Page</Heading>
			<Heading h5>Welcome to the Sauti portal — helping you trade legally, safely, and profitably across borders.</Heading>
			<RadioGroup groupName="language" fields={["english", "swahili", "luganda"]} />
			<RadioGroup groupName="category" fields={["market-prices", "exchange-rates", "trade-info", "covid-19-info", "report-border-experience", "weather", "help/about", "surveys"]} />
		</>
	);
};

export default PortalPage;