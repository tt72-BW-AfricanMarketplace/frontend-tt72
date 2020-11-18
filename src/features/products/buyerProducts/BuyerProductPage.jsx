import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../../shared/Header";
import Guide from "./components/Guide";
import BProductCard from "./components/BProductCard";
import SplitPane from "./components/SplitPane";
import { fetchAllProducts, fetchProduct } from "../productSlice";

const Page = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Banner = styled.div`
	margin: 3rem 0 0;
	border-bottom: 1px solid var(--pLight);
	width: 100vw;
	background-color: var(--pDark);
	height: 10rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	h1 {
		display: block;
		color: var(--pText);
		font-size: 2rem;
		text-decoration: none;
	}
`;
const BuyerProductPage = props => {
	const products = useSelector(state => state.product?.product ?? []);
	// const [res, setRes] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProduct(1));
		// dispatch(fetchAllProducts());
	}, [dispatch])

	return (
		<Page>
			<Header />
			<Banner>
				<h1>Buyer Products Page</h1>
			</Banner>
			<SplitPane
				left={
					<Guide key="left" />
				}
				right={
					products.map(product => {
						return <BProductCard key={product.id} product={product} />
					})
				}
			/>
		</Page>
	);
}

export default BuyerProductPage;