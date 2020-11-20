import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../../shared/Header";
// import Guide from "./components/Guide";
import BProductCard from "./components/BProductCard";
import Cart from "./components/Cart";
import SplitPane from "./components/SplitPane";
import { fetchAllProducts } from "../productSlice";

const Page = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
`;

const Main = styled.div`
	height: 100%;
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
			<Main>
				<SplitPane
					left={
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