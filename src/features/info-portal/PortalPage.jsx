import React, { useState } from "react";
import styled from "styled-components";
import Header from "../shared/Header";
// import RadioGroup from "./components/RadioGroup";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MarketPrices from "./components/MarketPrices";
import ExchangeRates from "./components/ExchangeRates";
import TradeInfo from "./components/TradeInfo";
// import ToggleSection from "./components/ToggleSection";
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

const Nav = styled.nav`
	width: 100vw;
	background-color: var(--pDark);
	height: 10rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	Link, a {
		display: block;
		color: var(--pText);
		font-size: 2rem;
		/* height: 100%; */
		text-decoration: none;
	}
`;

const PortalPage = props => {
	const [values, setValues] = useState({});

	const handler = (name, value) => {
		setValues({
			...values, [name]: value,
		});
	};

	// const handleSubmit = (evt) => {
	// 	evt.preventDefault();
	// }

	return (
		<Router>
			<Page>
				<Header />
				<Heading h1>Info Portal Page</Heading>
				<Heading h5>Welcome to the Sauti portal — helping you trade legally, safely, and profitably across borders.</Heading>
				<Nav>
					<Link to="/info-portal/market-prices">Market Prices</Link>
					<Link to="/info-portal/trade-info">Trade Info</Link>
					<Link to="/info-portal/exchange-rates">Exchange Rates</Link>
					<Link to="/info-portal/report-incident">Report Incident</Link>
				</Nav>
				{/* <form onSubmit={handleSubmit}> */}
				{/* <ToggleSection
					shown={true}
					sectionTitle="Please select a language"
					groupName="language"
					fields={["english", "swahili", "luganda"]}
					handler={handler}
				/> */}
				{/* <ToggleSection
						shown={true}
						sectionTitle="Please select a category"
						groupName="category"
						fields={["market-prices", "exchange-rates", "trade-info", "covid-19-info", "report-border-experience", "weather", "help/about", "surveys"]}
						handler={handler}
					/> */}
				{/* <MarketPrices values={values} handler={handler} />
					<ExchangeRates values={values} handler={handler} />
					<TradeInfo values={values} handler={handler} /> */}
				{/* </form> */}
			</Page>

			<Switch>
				<Route path="/info-portal/market-prices">
					<MarketPrices values={values} handler={handler} />
				</Route>
				<Route path="/info-portal/exchange-rates">
					<ExchangeRates values={values} handler={handler} />
				</Route>
				<Route path="/info-portal/trade-info">
					<TradeInfo values={values} handler={handler} />
				</Route>
				<Route path="/info-portal/report-incident">
					<div>Report incident</div>
				</Route>
			</Switch>
		</Router>
	);
};

export default PortalPage;