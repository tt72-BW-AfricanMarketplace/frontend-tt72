import React, { useState } from "react";
import styled from "styled-components";
import Header from "../shared/Header";
// import RadioGroup from "./components/RadioGroup";
import MarketPrices from "./components/MarketPrices";
import ExchangeRates from "./components/ExchangeRates";
import TradeInfo from "./components/TradeInfo";
import ToggleSection from "./components/ToggleSection";
import layout from "../layout";
const { Heading } = layout;

const Page = styled.div`
	display: flex;
	flex-flow: column nowrap;
	form {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
	}
`;

const PortalPage = props => {
	const [values, setValues] = useState({});

	const handler = (name, value) => {
		setValues({
			...values, [name]: value,
		});
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
	}

	return (
		<Page>
			<Header />
			<Heading h1>Info Portal Page</Heading>
			<Heading h5>Welcome to the Sauti portal — helping you trade legally, safely, and profitably across borders.</Heading>
			<form onSubmit={handleSubmit}>
				<ToggleSection
					shown={true}
					sectionTitle="Please select a language"
					groupName="language"
					fields={["english", "swahili", "luganda"]}
					handler={handler}
				/>
				<ToggleSection
					shown={values.language}
					sectionTitle="Please select a category"
					groupName="category"
					fields={["market-prices", "exchange-rates", "trade-info", "covid-19-info", "report-border-experience", "weather", "help/about", "surveys"]}
					handler={handler}
				/>
				<MarketPrices values={values} handler={handler} />
				<ExchangeRates values={values} handler={handler} />
				<TradeInfo values={values} handler={handler} />
			</form>
		</Page>
	);
};

export default PortalPage;