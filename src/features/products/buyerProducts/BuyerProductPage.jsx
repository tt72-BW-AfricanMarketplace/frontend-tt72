import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../../shared/Header";
import Guide from "./components/Guide";
import BProductCard from "./components/BProductCard";
import Cart from "./components/Cart";
import SplitPane from "./components/SplitPane";
import { fetchAllProducts } from "../productSlice";

const Page = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Main = styled.div`
	height: 76vh;
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

const ProductGallery = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

const BuyerProductPage = props => {
	const products = useSelector(state => state.product?.products ?? []);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<Page>
			<Header />
			<Banner>
				<h1>Buyer Products Page</h1>
			</Banner>
			<Main>
				<SplitPane
					left={
						<Guide key="left" />
					}
					middle={
						<ProductGallery>
							{
								products.map(product => {
									return <BProductCard key={product.id} product={product} />
								})
							}
						</ProductGallery>
					}
					right={
						<Cart />
					}
				/>
			</Main>
		</Page>
	);
}

export default BuyerProductPage;