import React from "react";
import ToggleSection, { HideAndSeek } from "./ToggleSection";

const TradeInfo = props => {
	const { values } = props;
	const TRADE_INFO_STAGES = [
		{
			shown: (true),
			sectionTitle: "Please select a category",
			groupName: "trade_info_category",
			fields: ["border-procedures", "required-documents", "border-agencies", "tax-collector", "regulated-goods"],
		},
		{
			shown: (values.trade_info_category === "border-procedures"),
			sectionTitle: "What was your commodity?",
			groupName: "border_procedures_commodity",
			fields: ["cereals", "fruits", "legumes", "pulses"],
		},
		{
			shown: (values.border_procedures_commodity),
			sectionTitle: "Select your product",
			groupName: "border_procedures_product",
			fields: ["maize-cereal", "maize-flour", "millet-cereal", "millet-flour", "rice-husked", "rice-processed", "sorghum-cereal", "sorghum-flour", "more"],
		},
		{
			shown: (values.border_procedures_product),
			sectionTitle: "Where are you selling your goods?",
			groupName: "border_procedures_sale_location",
			fields: ["UgandaKenya", "TanzaniaKenya", "KenyaUganda", "KenyaTanzania",],
		},
		{
			shown: (values.border_procedures_sale_location),
			sectionTitle: "Where was your product made/originate?",
			groupName: "border_procedures_product_origin",
			fields: ["UgandaKenya", "TanzaniaKenya", "KenyaUganda", "KenyaTanzania"],
		},
		{
			shown: (values.border_procedures_product_origin),
			sectionTitle: "Is the value of your goods...",
			groupName: "border_procedures_valueOfGoods",
			fields: ["Greater than USD 2000 (apx KES 218500)", "Less than USD 2000 (apx KES 218500)",],
		},
		{
			shown: (values.border_procedures_valueOfGoods),
			sectionTitle: "An SMS with your border procedure will be sent to you shortly",
			groupName: "border_procedure_CONFIRMATION",
			fields: ["home", "email", "contact"],
		}
	]

	return (
		<>
			<HideAndSeek shown={true}>
				{
					TRADE_INFO_STAGES.map(stage => {
						const { shown, sectionTitle, groupName, fields } = stage;
						return <ToggleSection
							key={`${sectionTitle}_${groupName}`}
							shown={shown}
							sectionTitle={sectionTitle}
							groupName={groupName}
							fields={fields}
							handler={props.handler}
							children={stage.children ? stage.children : null}
						/>
					})
				}
			</HideAndSeek>
		</>
	)
}

export default TradeInfo;