import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SCart = styled.div`
	background-color: var(--pDark);
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	h1 {
		font-size: 2rem;
	}
	p {
		font-size: 1.6rem;
	}
	div {
		width: 100%;
		height: 20rem;
		margin: 0;
		background-color: var(--pDark);
	}
`;

const Cart = props => {
	const cart = useSelector(state => state.buyerProduct.cart);
	return (
		<SCart>
			<h1>Cart</h1>
			{
				cart.length === 0 &&
				<p>You don't have any items in your cart!</p>
			}
		</SCart>
	);
};

export default Cart;