import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import ToggleSection from "./ToggleSection";
import layout from "../../layout";
import Input from "../../shared/Input";
// import { getRates } from "../../../env/api/currencyClient";

const { Heading } = layout;

const SExchange = styled.div`
	display: ${pr => pr.shown ? "block" : "none"};
	background-color: var(--pDark);
	height: 200px;
	width: 80%;
	margin: 0 auto;
`;

const Opt = ({ name }) => {
	return (
		<option name={name} id={name} value={name}>{name}</option>
	)
}

const ExchangeRates = props => {
	const [exchange, setExchange] = useState({ base: "USD", compare: "KES", base_val: 1, });
	const [compVal, setCompVal] = useState(0);
	// const CONVERSIONS = getRates()
	// console.log(CONVERSIONS);
	// const res = getRates();
	// const CONVERSION_RATES = res.rates;
	// const { values } = props;

	const handleSelect = (evt) => {
		evt.preventDefault();
		const { name, value } = evt.target;
		setExchange({
			...exchange, [name]: value
		})
	}

	const handleInputChange = (evt) => {
		evt.preventDefault();
		const { name, value } = evt.target;
		setExchange({ ...exchange, [name]: value });
	};

	useEffect(() => {
		const CONVERSION_RATES = {
			"USD": "1.0",
			"KES": "109.213333",
			"UGX": "3696.82168",
			"TZS": "2320.123553",
			"RWF": "988.13928",
			"ETB": "37.75"
		};
		setCompVal(
			((exchange.base_val / CONVERSION_RATES[exchange.base])
				* CONVERSION_RATES[exchange.compare])
				.toFixed(2)
		);
	}, [exchange]);

	return (
		<>
			<SExchange shown={true}>
				<Heading h4>Please select currencies to compare</Heading>
				<div>
					<select name="base" id="base" onChange={handleSelect}>
						<Opt selected name="USD" />
						<Opt name="KES" />
						<Opt name="UGX" />
						<Opt name="TZS" />
						<Opt name="KTB" />
						<Opt name="ETB" />
						<Opt name="RWF" />
					</select>
					<Input type="number" name="base_val" placeholder={`amount of ${exchange.base}`} className="base-val" value={exchange.base_val} onChange={handleInputChange} />
				</div>
				<div>
					<select name="compare" id="compare" onChange={handleSelect}>
						<Opt selected name="KES" />
						<Opt name="USD" />
						<Opt name="UGX" />
						<Opt name="TZS" />
						<Opt name="RWF" />
						<Opt name="ETB" />
					</select>
					<Input type="number" name="comp_val" className="comp-val" value={compVal} readOnly={true} />
				</div>
			</SExchange>
		</>
	);
}

export default ExchangeRates;