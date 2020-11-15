import React, { useState } from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import layout from "../layout";
const { Heading } = layout;

const RadioGroup = ({ groupName, fields, handler }) => {
	const [selected, setSelected] = useState("");

	const handleClick = (evt) => {
		const { name, value } = evt.target;
		setSelected(value);
		handler(name, value);
	};

	return (
		<fieldset id={groupName}>
			<Heading h5>Please select a {groupName}</Heading>
			{/* <legend>{groupName}</legend> */}
			{
				fields.map(field => {
					return (
						<React.Fragment key={groupName + "-" + field}>
							<input type="radio" name={groupName} id={field} value={field} checked={selected === field} onClick={handleClick} />
							<label htmlFor={field}>{field}</label>
						</React.Fragment>
					);
				})
			}
		</fieldset>
	);
}

const HideAndSeek = styled.div`
	display: ${props => props.shown ? "block" : "none"};
`;

const MarketPrices = props => {
	const { values } = props;
	return (
		<>
			<HideAndSeek shown={values.category === "market-prices"}>
				<HideAndSeek shown={values.category === "market-prices"}>
					<Heading h5>Market Prices</Heading>
					<RadioGroup groupName="market_country" fields={["burundi", "kenya", "rwanda", "uganda"]} handler={props.handler} />
				</HideAndSeek>
				<HideAndSeek shown={values.market_country}>
					<Heading h5>Market Commodity Category</Heading>
					<RadioGroup groupName="market_commodity_category" fields={
						["beans", "cereals—maize", "cereals—other", "cereals—rice", "peas"]
					} handler={props.handler} />
				</HideAndSeek>
				<HideAndSeek shown={values.market_commodity_category}>
					<Heading h5>Market Commodity</Heading>
					<RadioGroup groupName="market_commodity_item" fields={["mixed-beans", "red-beans", "yellow-beans"]} handler={props.handler} />
				</HideAndSeek>
				<HideAndSeek shown={values.market_commodity_item}>
					<Heading h5>Select a Market</Heading>
					<RadioGroup groupName="market_selection" fields={["Bujumbura", "Kobero", "Ngozi"]} handler={props.handler} />
				</HideAndSeek>
				<HideAndSeek shown={values.market_selection}>
					<Heading h5>Confirmation</Heading>
					<div>
						<p>{values.market_commodity_item} at {values.market_selection}</p>
						<p>Wholesale: 1385 BIF/1Kg</p>
						<p>Retail: 1474 BIF/1Kg</p>
						<p>Updated: {String(new Date())}</p>
						<p>Source: EAGC-RATIN</p>
					</div>
					<RadioGroup groupName="confirmation_options" fields={["send-info-by-SMS", "more-markets", "convert-to-KES"]} handler={props.handler} />
				</HideAndSeek>
			</HideAndSeek>
		</>
	)
};

// const MarketCommodity = props => {
// 	return (
// 	)
// }

const PortalPage = props => {
	const [values, setValues] = useState({});

	const handler = (name, value) => {
		setValues({
			...values, [name]: value,
		});
	};

	return (
		<form>
			<Header />
			<Heading h1>Info Portal Page</Heading>
			<Heading h5>Welcome to the Sauti portal — helping you trade legally, safely, and profitably across borders.</Heading>
			<RadioGroup groupName="language" fields={["english", "swahili", "luganda"]} handler={handler} />
			<RadioGroup groupName="category" fields={["market-prices", "exchange-rates", "trade-info", "covid-19-info", "report-border-experience", "weather", "help/about", "surveys"]} handler={handler} />
			<MarketPrices values={values} handler={handler} />
		</form>
	);
};

export default PortalPage;