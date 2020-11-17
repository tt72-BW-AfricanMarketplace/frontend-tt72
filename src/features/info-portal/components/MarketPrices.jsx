import React, { useState } from "react";
import ToggleSection, { HideAndSeek } from "./ToggleSection";
import { MemoryRouter, withRouter, BrowserRouter as Router, useRouteMatch, useParams, Route, useHistory } from "react-router-dom";

const MarketPrices = props => {
	// const match = useRouteMatch();
	// console.log(match);
	const [step, setStep] = useState(0);
	const [vals, setValues] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	const history = useHistory();
	const { values } = props;
	const handler = (evt) => {
		const { name, value } = evt.target;
		setValues({ ...vals, [name]: value });
		const BASE = "/info-portal/market-prices/";
		switch (currentIndex) {
			case (0):
				history.push(`${BASE}a`);
				setCurrentIndex(currentIndex + 1);
				break;
			case (1):
				history.push(`${BASE}b`);
				setCurrentIndex(currentIndex + 1);
				break;
			case (2):
				history.push(`${BASE}c`);
				setCurrentIndex(currentIndex + 1);
				break;
			case (3):
				history.push(`${BASE}d`);
				setCurrentIndex(currentIndex + 1);
				break;
			default:
				history.push(`${BASE}e`);
				setCurrentIndex(currentIndex + 1);
				break;
		}
	}
	const MARKET_PRICE_STAGES = [
		{
			// shown: (values.category === "market-prices"),
			shown: (true),
			path: "/info-portal/market-prices/a",
			// path: "/a",
			sectionTitle: "Please select a country",
			groupName: "market_country",
			fields: ["burundi", "kenya", "rwanda", "uganda"],
		},
		{
			shown: (values.market_country),
			path: "/info-portal/market-prices/b",
			// path: "/b",
			sectionTitle: "Please select a commodity category",
			groupName: "market_commodity_category",
			fields: ["beans", "cereals—maize", "cereals—other", "cereals—rice", "peas"],
		},
		{
			shown: (values.market_commodity_category),
			path: "/info-portal/market-prices/c",
			// path: "/c",
			sectionTitle: "Please select a commodity item",
			groupName: "market_commodity_item",
			fields: ["mixed-beans", "red-beans", "yellow-beans"],
		},
		{
			shown: values.market_commodity_item,
			path: "/info-portal/market-prices/d",
			// path: "/d",
			sectionTitle: "Please select a market",
			groupName: "market_selection",
			fields: ["Bujumbura", "Kobero", "Ngozi"],
		},
		{
			shown: values.market_selection,
			path: "/info-portal/market-prices/e",
			// path: "/e",
			sectionTitle: "Confirmation",
			groupName: "confirmation_options",
			fields: ["send-info-by-SMS", "more-markets", "convert-to-KES"],
			children: (
				<div>
					<p>{values.market_commodity_item} at {values.market_selection}</p>
					<p>Wholesale: 1385 BIF/1Kg</p>
					<p>Retail: 1474 BIF/1Kg</p>
					<p>Updated: {String(new Date())}</p>
					<p>Source: EAGC-RATIN</p>
				</div>
			),
		}
	];

	const toggleMap = (arr) => {
		return arr.map(stage => {
			const { shown, path, sectionTitle, groupName, fields } = stage;
			return (
				<ToggleSection
					key={`${sectionTitle} _${groupName}`}
					shown={true}
					sectionTitle={sectionTitle}
					groupName={groupName}
					fields={fields}
					handler={handler}
					children={stage.children ? stage.children : null}
				/>
			)
		})
	}

	const routes = [
		{
			path: "/info-portal/market-prices/a",
			stages: MARKET_PRICE_STAGES.slice(0, 1),
			form: toggleMap(MARKET_PRICE_STAGES.slice(0, 1)),
		},
		{
			path: "/info-portal/market-prices/b",
			stages: MARKET_PRICE_STAGES.slice(0, 2),
			form: toggleMap(MARKET_PRICE_STAGES.slice(0, 2)),
		},
		{
			path: "/info-portal/market-prices/c",
			stages: MARKET_PRICE_STAGES.slice(0, 3),
			form: toggleMap(MARKET_PRICE_STAGES.slice(0, 3),),
		},
		{
			path: "/info-portal/market-prices/d",
			stages: MARKET_PRICE_STAGES.slice(0, 4),
			form: toggleMap(MARKET_PRICE_STAGES.slice(0, 4)),
		},
		{
			path: "/info-portal/market-prices/e",
			stages: MARKET_PRICE_STAGES.slice(0, 5),
			form: toggleMap(MARKET_PRICE_STAGES.slice(0, 5)),
		},
	];

	return (
		<div>
			{
				routes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
						>
							{route.form.map(x => {
								return x;
							})}
						</Route>
					)
				})
			}
		</div>
	)
};

export default MarketPrices;