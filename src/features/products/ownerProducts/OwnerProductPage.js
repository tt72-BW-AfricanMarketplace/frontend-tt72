import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import {
	fetchOwnerProducts as fetchOwnerProductsAction,
	postOwnerProduct as postOwnerProductAction,
} from './store/actions'

import layout from '../../layout';
import ProductThumbnail from './ProductThumbnail';
import Header from "../../shared/Header";
import styled from "styled-components";

const { Container, Button, Flex } = layout;

const InputPair = styled.div`
	margin: 0.2rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	label {
		font-size: 1.4rem;
	}
	input {
		background-color: transparent;
		border: 1px solid var(--pLight);
		border-radius: 5px;
		color: var(--pText);
		&[type=number]::-webkit-inner-spin-button,
		&[type=number]::-webkit-outer-spin-button {
			opacity: 1;
			background: var(--pDarker);
		}
	}
`;

const SplitFlex = styled(Flex)`
	flex-flow: row nowrap;
	justify-content: space-between;
	.left {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
		width: 30%;
	}
	.right {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		width: 70%;
	}
`;

const HideawayForm = styled.form`
	display: ${props => props.shown ? "flex" : "none"};
	padding: 2rem;
	border-radius: 10px;
	background-color: var(--pDark);
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;

`;

const initialItem = {
	product_name: '',
	all_amount: 0,
	measurement_unit: '',
	available_amount: 0,
	price: '',
	currency: '',
};


const OwnerProductPage = (props) => {
	const { fetchOwnerProducts, postOwnerProduct, products, postStatus, deleteStatus } = props;
	const [addActive, setAddActive] = useState(false);
	const [formItem, setFormItem] = useState(initialItem);
	const id = 1; // fix with log in token later

	useEffect(() => {
		fetchOwnerProducts(id);
	}, [id, fetchOwnerProducts]);

	useEffect(() => {
		if (postStatus === "success" || deleteStatus === "success") {
			fetchOwnerProducts(id);
		}
	}, [fetchOwnerProducts, postStatus, deleteStatus]);

	const handleClick = () => {
		setAddActive(!addActive)
	}

	const handleChange = e => {
		setFormItem({
			...formItem,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		setAddActive(false);
		postOwnerProduct(id, formItem);
		setFormItem(initialItem);
	}

	return (
		<div>
			<Header />

			<Container>
				{
					props.isLoading ? <p>Loading Products</p> : null
				}
				{
					props.error ? <p>{props.error}</p> : null
				}

				<SplitFlex>
					<div className="left">
						<Button onClick={handleClick}>Add New Item</Button>
						{
							addActive
								?
								<HideawayForm shown={addActive} onSubmit={handleSubmit}>
									<Flex justifyCenter alignCenter>
										<InputPair>
											<label htmlFor="product_name">Item Name</label>
											<input
												type='text'
												name='product_name'
												id='product_name'
												onChange={handleChange}
												value={formItem.product_name}
											/>
										</InputPair>
										<InputPair>
											<label htmlFor="all_amount">Amount</label>
											<input
												type='number'
												name='all_amount'
												id='all_amount'
												onChange={handleChange}
												value={formItem.all_amount}
											/>
										</InputPair>
										<InputPair>
											<label htmlFor="measurement_unit">Unit</label>
											<input
												type='text'
												name='measurement_unit'
												id='measurement_unit'
												onChange={handleChange}
												value={formItem.measurement_unit}
											/>
										</InputPair>
										<InputPair>
											<label htmlFor="available_amount">Available</label>
											<input
												type='number'
												name='available_amount'
												id='available_amount'
												onChange={handleChange}
												value={formItem.available_amount}
											/>
										</InputPair>
										<InputPair>
											<label htmlFor="price">Price</label>
											<input
												type='text'
												name='price'
												id='price'
												onChange={handleChange}
												value={formItem.price}
											/>
										</InputPair>
										<InputPair>
											<label htmlFor="currency">Currency</label>
											<input
												type='text'
												name='currency'
												id='currency'
												onChange={handleChange}
												value={formItem.currency}
											/>
										</InputPair>
									</Flex>
									<Button id="submit" secondary="true" type='submit'>Add Item</Button>
									{/* <Container>
									</Container> */}
								</HideawayForm>
								: null
						}
					</div>

					<div className="right">
						{
							products.map((product, idx) => {
								return (
									<ProductThumbnail
										key={idx}
										product={product}
										index={idx}
									/>
								)
							})
						}
					</div>
				</SplitFlex>


			</Container>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.ownerProduct.isLoading,
		products: state.ownerProduct.productsData,
		error: state.ownerProduct.error,
		loadNewProduct: state.ownerProduct.loadNewProduct,
		postStatus: state.ownerProduct.postStatus,
		deleteStatus: state.ownerProduct.deleteStatus,
		putLoadingProduct: state.ownerProduct.putLoadingProduct
	}
}

export default connect(mapStateToProps, {
	fetchOwnerProducts: fetchOwnerProductsAction,
	postOwnerProduct: postOwnerProductAction,
	// resetPutStatus: resetPutStatusAction
})(OwnerProductPage);