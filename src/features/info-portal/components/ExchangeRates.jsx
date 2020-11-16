import React from "react";

import styled from "styled-components";
import ToggleSection from "./ToggleSection";


const ExchangeRates = props => {
	const { values, handler } = props;
	return (
		<>
			<ToggleSection 
				shown={values.category === "exchange-rates"}
				groupName="exchange_currencies"
				fields={[]}
				handler={handler}
			/>
		</>
	);
}

export default ExchangeRates;