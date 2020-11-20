import axios from 'axios';
import client from '../../../../../env/api/client'

//action types
export const FETCH_OWNER_PRODUCTS_START = 'FETCH_OWNER_PRODUCTS_START';
export const FETCH_OWNER_PRODUCTS_SUCCESS = 'FETCH_OWNER_PRODUCTS_SUCCESS';
export const FETCH_OWNER_PRODUCTS_FAILURE = 'FETCH_OWNER_PRODUCTS_FAILURE';

export const POST_OWNER_PRODUCT_START = 'POST_OWNER_PRODUCT_START';
export const POST_OWNER_PRODUCT_SUCCESS = 'POST_OWNER_PRODUCT_START';
export const POST_OWNER_PRODUCT_FAILURE = 'POST_OWNER_PRODUCT_START';

export const PUT_OWNER_PRODUCT_START = 'PUT_OWNER_PRODUCT_START';
export const PUT_OWNER_PRODUCT_SUCCESS = 'PUT_OWNER_PRODUCT_SUCCESS';
export const PUT_OWNER_PRODUCT_FAILURE = 'PUT_OWNER_PRODUCT_FAILURE';

export const RESET_PUT_STATUS = 'RESET_PUT_STATUS'

export const DELETE_OWNER_PRODUCT_START = 'DELETE_OWNER_PRODUCT_START';
export const DELETE_OWNER_PRODUCT_SUCCESS = 'DELETE_OWNER_PRODUCT_START';
export const DELETE_OWNER_PRODUCT_FAILURE = 'DELETE_OWNER_PRODUCT_START';

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
    }
}

export const postOwnerProduct = (ownerId, newProduct) => {
    return (dispatch) => {
        console.log('postOwnerProduct working')
        dispatch({ type: POST_OWNER_PRODUCT_START })

        axios
            .post(`https://african--market.herokuapp.com/api/products/${ownerId}`, newProduct)
            //Convert to using client.js later
            .then((res) => {
                console.log('res.data from postOwnerProduct', res.data)
                dispatch({
                    type: POST_OWNER_PRODUCT_SUCCESS,
                    payload: res.data

                    //need payload to be all items including the new item???
                })
                //update window.location here
            })
            
            .catch((err) => {
                dispatch({
                    type: POST_OWNER_PRODUCT_FAILURE,
                    payload: err.message
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
                console.log('res.data from putOwnerProduct', res.data)
                dispatch({
                    type: PUT_OWNER_PRODUCT_SUCCESS,
                    

                    payload: res.data
                    //need payload to be whole state including updated item?
                })
            })
            .catch((err) => {
                dispatch({
                    type: PUT_OWNER_PRODUCT_FAILURE,
                    payload: err.message
                })
            })
    }

}

export const resetPutStatus = () => {
    return (dispatch) => {
        dispatch({type: RESET_PUT_STATUS})
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
    }
}