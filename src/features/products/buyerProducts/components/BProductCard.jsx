import React, { useState } from "react";
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
	div.cart-utils {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		input {
			width: 30px;
			height: 30px;
		}
	}
`;

const CartButton = styled(Button)`
	width: 100px;
	height: 30px;
	font-size: 1.6rem;
	/* margin: 0 auto; */
	border-radius: 4px;
`;

const BProductCard = props => {
	const [quantity, setQuantity] = useState(1);

	const { product } = props;
	const { id, owner_id, product_name, all_amount, available_amount, measurement_unit, price, currency } = product;
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		evt.preventDefault();
		const { value } = evt.target;
		setQuantity(value);
	}

	return (
		<ProductCard>
			<Heading h4>{product_name}</Heading>
			<p>Available: {available_amount} of {all_amount} {measurement_unit}</p>
			<p>Price: ${price.toFixed(2)} {currency} per {measurement_unit}</p>
			<p>ID: {id}</p>
			<p>Owner ID: {owner_id}</p>
			<div className="cart-utils">
				<CartButton onClick={() => dispatch(addToCart(product, quantity))}>Add To Cart</CartButton>
				<input type="number" name="quantity" id="quantity" value={quantity} onChange={handleChange} />
			</div>
		</ProductCard>
	);
};

export default BProductCard;