import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import layout from "../../../layout/";
import { addToCart } from "../buyerProductSlice";
const { Heading, Card, Button } = layout;

const ProductCard = styled(Card)`
	background-color: var(--pDark);
	p {
		font-size: 1.6rem;
	}
`;

const CartButton = styled(Button)`
	width: 100px;
	height: 30px;
	font-size: 1.6rem;
	margin: 0 auto;
	border-radius: 4px;
`;

const BProductCard = props => {
	const { product } = props;
	const { id, owner_id, product_name, all_amount, available_amount, measurement_unit, price, currency } = product;
	const dispatch = useDispatch();
	// const addToCart = (idIn) => {
	// 	console.log(idIn);
	// }

	return (
		<ProductCard>
			<Heading h4>{product_name}</Heading>
			<p>Available: {available_amount} of {all_amount} {measurement_unit}</p>
			<p>Price: ${price.toFixed(2)} {currency} per {measurement_unit}</p>
			<p>ID: {id}</p>
			<p>Owner ID: {owner_id}</p>
			<CartButton onClick={() => dispatch(addToCart(product))}>Add To Cart</CartButton>
		</ProductCard>
	)
};

export default BProductCard;