import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import layout from '../../layout';
import Header from "../../shared/Header";
import {
	putOwnerProduct as putOwnerProductAction,
	// resetPutStatus as resetPutStatusAction,
} from './store/actions';
import styled from "styled-components";


const { Container, Button, Link, Flex } = layout;

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

const SplitForm = styled.form`
	display: flex;
	padding: 5rem;
	border-radius: 10px;
	background-color: var(--pDark);
	flex-flow: row nowrap;
	justify-content: space-between;
	.left {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
		width: 40%;
	}
	.right {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
`;

const initialItem = {
	product_name: '',
	all_amount: 0,
	measurement_unit: '',
	available: 0,
	price: '',
	currency: '',
}

const ProductDetail = (props) => {
	const { id } = useParams();
	const { putLoadingProduct, putOwnerProduct, products } = props;
	const [inputValues, setInputValues] = useState(initialItem);
	const userId = 1; ///get from cookie/token later
	const { push } = useHistory();

	useEffect(() => {
		// eslint-disable-next-line eqeqeq
		let product = products.find(p => p.id == id)
		setInputValues(product)
	}, [id, products])

	const handleChange = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		putOwnerProduct(userId, id, inputValues)
	}

	useEffect(() => {
		if (putLoadingProduct === 'success') {
			push(`/owner/products`);
		}
	}, [putLoadingProduct, push])


	return (
		<div>
			<Header />

			<Container>
				<SplitForm onSubmit={handleSubmit}>
					<div className="left">
						<InputPair>
							<label htmlFor="product_name">
								Item Name
						</label>
							<input
								type='text'
								name='product_name'
								id='product_name'
								onChange={handleChange}
								value={inputValues.product_name}
							/>
						</InputPair>
						<InputPair>
							<label htmlFor="all_amount">
								Amount
						</label>
							<input
								type='number'
								name='all_amount'
								id='all_amount'
								onChange={handleChange}
								value={inputValues.all_amount}
							/>
						</InputPair>
						<InputPair>
							<label htmlFor="measurement_unit">
								Unit
						</label>
							<input
								type='text'
								name='measurement_unit'
								id='measurement_unit'
								onChange={handleChange}
								value={inputValues.measurement_unit}
							/>
						</InputPair>
						<InputPair>
							<label htmlFor="available">
								Available
						</label>
							<input
								type='number'
								name='available'
								id='available'
								onChange={handleChange}
								value={inputValues.available}
							/>
						</InputPair>
						<InputPair>
							<label htmlFor="price">
								Price
						</label>
							<input
								type='text'
								name='price'
								id='price'
								onChange={handleChange}
								value={inputValues.price}
							/>
						</InputPair>
						<InputPair>
							<label htmlFor="currency">
								Currency
						</label>
							<input
								type='text'
								name='currency'
								id='currency'
								onChange={handleChange}
								value={inputValues.currency}
							/>
						</InputPair>
					</div>

					<div className="right">

						<Button type='submit'>Submit Changes</Button>
						<Link to='/owner/products'>Cancel</Link>

					</div>

				</SplitForm>
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
		putLoadingProduct: state.ownerProduct.putLoadingProduct
	}
}

export default connect(mapStateToProps, {
	putOwnerProduct: putOwnerProductAction,
	// resetPutStatus: resetPutStatusAction
})(ProductDetail)

