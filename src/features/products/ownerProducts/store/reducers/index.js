import {
    FETCH_OWNER_PRODUCTS_START,
    FETCH_OWNER_PRODUCTS_SUCCESS,
    FETCH_OWNER_PRODUCTS_FAILURE,
    POST_OWNER_PRODUCT_START,
    POST_OWNER_PRODUCT_SUCCESS,
    POST_OWNER_PRODUCT_FAILURE,
    PUT_OWNER_PRODUCT_START,
    PUT_OWNER_PRODUCT_SUCCESS,
    PUT_OWNER_PRODUCT_FAILURE,
    DELETE_OWNER_PRODUCT_START,
    DELETE_OWNER_PRODUCT_SUCCESS,
    DELETE_OWNER_PRODUCT_FAILURE,
} from '../actions'

const initialState = {
    isLoading: false,
    productsData: [
        {
            id: 0,
            seller_id: 1,
            item_name: 'Biscuits',
            amount: 50, 
            unit: 'items',
            available: 10, 
            price: '5.99',
            currency: 'USD'
        },
        {
            id: 1,
            seller_id: 1,
            item_name: 'French Bread',
            amount: 10,
            unit: 'items',
            available: 10,
            price: '3.99',
            currency: 'USD'
        },
        {
            id: 2,
            seller_id: 1,
            item_name: 'Pumpkins',
            amount: 20,
            unit: 'items',
            available: 10,
            price: '9.99',
            currency: 'USD'
        },
        {
            id: 3,
            seller_id: 1,
            item_name: 'Truffles',
            amount: 25,
            unit: 'items',
            available: 15,
            price: '10.99',
            currency: 'USD'
        },
    ],
    error: '',
    loadNewProduct: false
}

export const ownerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OWNER_PRODUCTS_START:
            return {
                ...state, 
                isLoading: true,
                error: ''
            }
        case FETCH_OWNER_PRODUCTS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                productsData: action.payload
            }
        case FETCH_OWNER_PRODUCTS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_OWNER_PRODUCT_START: 
            return {
                ...state,
                isLoading: true, 
                error: '',
                loadNewProduct: true,
                //double check this one
            }
        case POST_OWNER_PRODUCT_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                productsData: action.payload, //Not sure about this one
                loadNewProduct: false,
                //double check this one
            }
        case POST_OWNER_PRODUCT_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                loadNewProduct: false,
                //double check this one
            }
        case PUT_OWNER_PRODUCT_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
                //double check this one
            }
        case PUT_OWNER_PRODUCT_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                productsData: action.payload // not sure about this one
                //double check this one
            }
        case PUT_OWNER_PRODUCT_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
                //double check this one
            }
        case DELETE_OWNER_PRODUCT_START: 
            return {
                ...state,
                isLoading: true,
                err: ''
            }
        case DELETE_OWNER_PRODUCT_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                productsData: action.payload
                // double check this one
            }
        case DELETE_OWNER_PRODUCT_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
                //double check this one
            }
        default:
            return state;
    }
}