import axios from 'axios';
import client from '../../../../../env/api/client'

//action types
export const FETCH_OWNER_PRODUCTS_START = 'FETCH_OWNER_PRODUCTS_START';
export const FETCH_OWNER_PRODUCTS_SUCCESS = 'FETCH_OWNER_PRODUCTS_SUCCESS';
export const FETCH_OWNER_PRODUCTS_FAILURE = 'FETCH_OWNER_PRODUCTS_FAILURE';

export const POST_OWNER_PRODUCT_START = 'POST_OWNER_PRODUCT_START';
export const POST_OWNER_PRODUCT_SUCCESS = 'POST_OWNER_PRODUCT_START';
export const POST_OWNER_PRODUCT_FAILURE = 'POST_OWNER_PRODUCT_START';

//action creators

export const fetchOwnerProducts = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_OWNER_PRODUCTS_START });

        client.getProductById(id)
            .then((res) => {
                // console.log('res from fetchOwnerProducts', res.data)
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
    }
}

export const postOwnerProduct = (newProduct) => {
    return (dispatch) => {
        dispatch({ type: POST_OWNER_PRODUCT_START })

        axios
            .post('path here', newProduct)
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
    }
}