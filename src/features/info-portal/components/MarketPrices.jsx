import React, { useState } from "react";
import ToggleSection from "./ToggleSection";


const MarketPrices = props => {
	const [values, setValues] = useState({});

	const handler = (evt) => {
		const { name, value } = evt.target;
		setValues({ ...values, [name]: value });
	};

	const MARKET_PRICE_STAGES = [
		{
			shown: (true),
			sectionTitle: "Please select a country",
			groupName: "market_country",
			fields: ["burundi", "kenya", "rwanda", "uganda"],
		},
		{
			shown: (values.market_country),
			sectionTitle: "Please select a commodity category",
			groupName: "market_commodity_category",
			fields: ["beans", "cereals—maize", "cereals—other", "cereals—rice", "peas"],
		},
		{
			shown: (values.market_commodity_category),
			sectionTitle: "Please select a commodity item",
			groupName: "market_commodity_item",
			fields: ["mixed-beans", "red-beans", "yellow-beans"],
		},
		{
			shown: values.market_commodity_item,
			sectionTitle: "Please select a market",
			groupName: "market_selection",
			fields: ["Bujumbura", "Kobero", "Ngozi"],
		},
		{
			shown: values.market_selection,
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


	return (
		<div>
			{
				MARKET_PRICE_STAGES.map(stage => {
					const { shown, sectionTitle, groupName, fields } = stage;
					return (
						<ToggleSection
							key={`${sectionTitle} _${groupName}`}
							shown={shown}
							sectionTitle={sectionTitle}
							groupName={groupName}
							fields={fields}
							handler={handler}
							children={stage.children ? stage.children : null}
						/>
					)
				})
			}
		</div>
	)
};

export default MarketPrices;