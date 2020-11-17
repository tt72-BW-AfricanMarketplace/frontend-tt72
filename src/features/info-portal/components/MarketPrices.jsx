import React from "react";
import ToggleSection, { HideAndSeek } from "./ToggleSection";
import { MemoryRouter, withRouter, BrowserRouter, Route, useHistory } from "react-router-dom";

const MarketPrices = props => {
	const history = useHistory();
	const { values } = props;
	const MARKET_PRICE_STAGES = [
		{
			// shown: (values.category === "market-prices"),
			shown: (true),
			// path: "/info-portal/market-prices/a",
			path: "/a",
			sectionTitle: "Please select a country",
			groupName: "market_country",
			fields: ["burundi", "kenya", "rwanda", "uganda"],
		},
		{
			shown: (values.market_country),
			// path: "/info-portal/market-prices/b",
			path: "/b",
			sectionTitle: "Please select a commodity category",
			groupName: "market_commodity_category",
			fields: ["beans", "cereals—maize", "cereals—other", "cereals—rice", "peas"],
		},
		{
			shown: (values.market_commodity_category),
			// path: "/info-portal/market-prices/c",
			path: "/c",
			sectionTitle: "Please select a commodity item",
			groupName: "market_commodity_item",
			fields: ["mixed-beans", "red-beans", "yellow-beans"],
		},
		{
			shown: values.market_commodity_item,
			// path: "/info-portal/market-prices/d",
			path: "/d",
			sectionTitle: "Please select a market",
			groupName: "market_selection",
			fields: ["Bujumbura", "Kobero", "Ngozi"],
		},
		{
			shown: values.market_selection,
			// path: "/info-portal/market-prices/e",
			path: "/e",
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

	// const ENTRIES = ["/info-portal/market-prices/a", "/info-portal/market-prices/b", "/info-portal/market-prices/c", "/info-portal/market-prices/d", "/info-portal/market-prices/e"];
	const ENTRIES = ["/a", "/b", "/c", "/d", "/e"];
	// let routeIndex = 0;
	// let currentRoute = 0;
	const handler = (evt) => {
		// evt.preventDefault();
		console.log(evt.target);
		// currentRoute++;
		console.log(history);
		history.goForward();

		// history.push("/info-portal/market-prices/c");
		// history.push(ENTRIES[currentRoute])
	}

	return (
		<MemoryRouter initialEntries={ENTRIES} initialIndex={1}>
			<div shown={true}>
				{
					MARKET_PRICE_STAGES.map(stage => {
						const { shown, path, sectionTitle, groupName, fields } = stage;
						return (
							<Route path={path}>
								<ToggleSection
									key={`${sectionTitle}_${groupName}`}
									shown={true}
									sectionTitle={sectionTitle}
									groupName={groupName}
									fields={fields}
									handler={handler}
									children={stage.children ? stage.children : null}
								/>
							</Route>
						)
					})
				}

			</div>
		</MemoryRouter>
	)
};

export default MarketPrices;