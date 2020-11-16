import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleSection from "./ToggleSection";
import layout from "../../layout";
import Input from "../../shared/Input";
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
	const [exchange, setExchange] = useState({ base: "KES", compare: "UGX", base_val: 1, });
	const [compVal, setCompVal] = useState(0);
	const { values, handler } = props;

	const handleSelect = (evt) => {
		evt.preventDefault();
		const { name, value } = evt.target;
		setExchange({
			...exchange, [name]: value
		})
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
	}

	const handleInputChange = (evt) => {
		evt.preventDefault();
		const { name, value } = evt.target;
		setExchange({ ...exchange, [name]: value });
	}

	useEffect(() => {

	}, [exchange]);

	return (
		<>
			{/* <ToggleSection
				shown={values.category === "exchange-rates"}
				groupName="exchange_currencies"
				fields={
					[
						"KES>UGX",
						"KES>TZS",
						"KES>RWF",
						"KES>ETB",
						"UGX>KES",
						"KTB>KES",
						"ETB>KES",
						"RWF>KES"
					]
				}
				handler={handler}
			/> */}
			<SExchange shown={values.category === "exchange-rates"}>
				<Heading h4>Please select currencies to compare</Heading>
				<form onSubmit={handleSubmit}>
					<Input type="number" name="base_val" placeholder={`amount of ${exchange.base}`} className="base-val" value={exchange.base_val} onChange={handleInputChange} />
					<Input type="number" name="comp_val" className="comp-val" value={compVal} />
					<select name="base" id="base" onChange={handleSelect}>
						<Opt name="KES" />
						<Opt name="UGX" />
						<Opt name="TZS" />
						<Opt name="KTB" />
						<Opt name="ETB" />
						<Opt name="RWF" />
					</select>
					<select name="compare" id="compare" onChange={handleSelect}>
						<Opt name="UGX" />
						<Opt name="TZS" />
						<Opt name="RWF" />
						<Opt name="ETB" />
						<Opt name="USD" />
					</select>
				</form>
			</SExchange>
		</>
	);
}

export default ExchangeRates;