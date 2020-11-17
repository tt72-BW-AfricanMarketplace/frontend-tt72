import React from "react";
import Header from "../../shared/Header";
import BProductCard from "./components/BProductCard";

const BuyerProductPage = props => {
	
	return (
		<>
			<Header />
			<div>Buyer Products Page</div>
			<BProductCard />
		</>
	);
}

export default BuyerProductPage;