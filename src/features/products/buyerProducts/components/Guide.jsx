import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SGuide = styled.div`
	background-color: var(--pDarker);
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	div {
		width: 100%;
		height: 20rem;
		margin: 0;
		background-color: var(--pDark);
		h1 {
			font-size: 2rem;
		}
	}
`;

const Checkbox = ({ fName, handler, checked, ...props }) => {
	const handleLocal = () => {
		handler(fName);
	}
	return (
		<>
			<input type="checkbox" name={fName} id={fName} checked={checked} onChange={handleLocal} />
			<label htmlFor="owner">Owner</label>
		</>
	);
};

const Guide = props => {
	// const allProducts = useSelector(state => state.buyerProduct.products);
	const allProducts = useSelector(state => state.product.products);
	const [filters, setFilters] = useState(new Set());
	const [filteredProducts, setFilteredProducts] = useState(allProducts);
	const firstTime = useRef(true);

	// Whenever brand filter changes update the products list
	useEffect(() => {
		if (firstTime.current) {
			firstTime.current = false;
		} else {
			if (filters.size === 0) {
				setFilteredProducts(allProducts);
				// console.log(filters);
				return;
			} else {
				const updatedProducts = allProducts.filter(product =>
					filters.has(product.brand)
				);
				setFilteredProducts(updatedProducts);
			}
		}
	}, [filters]);

	const toggleFilter = (category) => {
		const newSet = new Set(filters);
		if (filters.has(category)) {
			newSet.delete(category);
			setFilters(newSet);
		} else {
			newSet.add(category);
			setFilters(newSet);
		}
	};

	return (
		<SGuide>
			<div>
				<h1>Categories</h1>
				<Checkbox fName="owner" checked={filters.has("owner")} handler={toggleFilter} />
			</div>
			<div>
				<h1>Search</h1>
			</div>
		</SGuide>
	)
}

export default Guide;