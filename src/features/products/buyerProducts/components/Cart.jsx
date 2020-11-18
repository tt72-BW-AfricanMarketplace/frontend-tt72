import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../buyerProductSlice";
import styled from "styled-components";
import layout from "../../../layout";

const { Card, Button } = layout;

const SCart = styled.div`
	background-color: var(--pDark);
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	h1 {
		font-size: 2rem;
	}
	h4 {
		font-size: 1.8rem;
	}
	p {
		font-size: 1.8rem;
	}
	/* div {
		width: 100%;
		height: 20rem;
		margin: 0;
		background-color: var(--pDark);
	} */
`;

const SItem = styled(Card)`
	height: 10rem;
	margin: 0;
	width: 100%;
	background-color: var(--pDark);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
`;

const RemoveButton = styled(Button)`
	height: 3rem;
	width: 10rem;
`;

const CartItem = props => {
	const dispatch = useDispatch();
	const { id, product, quantity } = props.item;
	const { price, currency, product_name, measurement_unit } = product;
	
	// const handleDeletion = () => {
	// 	dispatch(removeFromCart(id));
	// }

	return (
		<SItem>
			<div>
			<h4>Item: {product_name}</h4>
			<p>Amount: {quantity} {measurement_unit}</p>
			<p>Price: ${Number(quantity * price).toFixed(2)} {currency}</p>
			</div>
			<RemoveButton onClick={() => { props.handleDeletion(id)}}>Remove</RemoveButton>
		</SItem>
	)
}

const Cart = props => {
	const cart = useSelector(state => state.buyerProduct.cart);
	const dispatch = useDispatch();
	const handleDeletion = (id) => {
		dispatch(removeFromCart(id));
	}
	return (
		<SCart>
			<h1>Cart</h1>
			{
				cart.length === 0 
				? (<p>You don't have any items in your cart!</p>)
				: cart.map(item => {
					return (<CartItem key={item.id} item={item} handleDeletion={handleDeletion} />);
				})
			}
		</SCart>
	);
};

export default Cart;