import axios from 'axios';
import client from '../../../../../env/api/client'

//action types
export const FETCH_OWNER_PRODUCTS_START = 'FETCH_OWNER_PRODUCTS_START';
export const FETCH_OWNER_PRODUCTS_SUCCESS = 'FETCH_OWNER_PRODUCTS_SUCCESS';
export const FETCH_OWNER_PRODUCTS_FAILURE = 'FETCH_OWNER_PRODUCTS_FAILURE';
export const RESET_FETCH_STATUS = "RESET_FETCH_STATUS";

export const POST_OWNER_PRODUCT_START = 'POST_OWNER_PRODUCT_START';
export const POST_OWNER_PRODUCT_SUCCESS = 'POST_OWNER_PRODUCT_SUCCESS';
export const POST_OWNER_PRODUCT_FAILURE = 'POST_OWNER_PRODUCT_FAILURE';

export const RESET_POST_STATUS = "RESET_POST_STATUS";

export const PUT_OWNER_PRODUCT_START = 'PUT_OWNER_PRODUCT_START';
export const PUT_OWNER_PRODUCT_SUCCESS = 'PUT_OWNER_PRODUCT_SUCCESS';
export const PUT_OWNER_PRODUCT_FAILURE = 'PUT_OWNER_PRODUCT_FAILURE';

export const RESET_PUT_STATUS = 'RESET_PUT_STATUS';

export const DELETE_OWNER_PRODUCT_START = 'DELETE_OWNER_PRODUCT_START';
export const DELETE_OWNER_PRODUCT_SUCCESS = 'DELETE_OWNER_PRODUCT_SUCCESS';
export const DELETE_OWNER_PRODUCT_FAILURE = 'DELETE_OWNER_PRODUCT_FAILURE';

export const RESET_DELETE_STATUS = "RESET_DELETE_STATUS";
//action creators

export const fetchOwnerProducts = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCH_OWNER_PRODUCTS_START });

		client.getProductsByUserId(id)
			.then((res) => {
				dispatch({
					type: FETCH_OWNER_PRODUCTS_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_OWNER_PRODUCTS_FAILURE,
					payload: err.message
				})
			})
			.finally(() => {
				dispatch({
					type: RESET_FETCH_STATUS
				})
			})
	}
}

export const postOwnerProduct = (ownerId, newProduct) => {
	return (dispatch) => {
		dispatch({ type: POST_OWNER_PRODUCT_START })

		axios
			.post(`https://african--market.herokuapp.com/api/products/${ownerId}`, newProduct)
			//Convert to using client.js later
			.then((res) => {
				dispatch({
					type: POST_OWNER_PRODUCT_SUCCESS,
					payload: res.data
				})
			})

			.catch((err) => {
				dispatch({
					type: POST_OWNER_PRODUCT_FAILURE,
					payload: err.message
				})
			})
			.finally(() => {
				dispatch({
					type: RESET_POST_STATUS,
				})
			})
	}
}

export const putOwnerProduct = (ownerId, prodId, productUpdate) => {
	return (dispatch) => {
		dispatch({ type: PUT_OWNER_PRODUCT_START })

		axios
			.put(`https://african--market.herokuapp.com/api/products/${ownerId}/product/${prodId}`, productUpdate)
			//Convert to using client.js later
			.then((res) => {
				dispatch({
					type: PUT_OWNER_PRODUCT_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: PUT_OWNER_PRODUCT_FAILURE,
					payload: err.message
				})
			})
			.finally(() => {
				dispatch({ type: RESET_PUT_STATUS });
			})
	}

}

export const deleteOwnerProduct = (ownerId, prodId) => {
	return (dispatch) => {
		dispatch({ type: DELETE_OWNER_PRODUCT_START })

		axios
			.delete(`https://african--market.herokuapp.com/api/products/${ownerId}/product/${prodId}`)
			.then((res) => {
				dispatch({
					type: DELETE_OWNER_PRODUCT_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: DELETE_OWNER_PRODUCT_FAILURE,
					payload: err.message
				})
			})
			.finally(() => {
				dispatch({
					type: RESET_DELETE_STATUS,
				})
			})
	}
}