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
	RESET_FETCH_STATUS,
	RESET_PUT_STATUS,
	RESET_POST_STATUS,
	RESET_DELETE_STATUS,
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
	loadNewProduct: false,
	fetchStatus: "idle",
	postStatus: "idle",
	deleteStatus: "idle",
	putLoadingProduct: 'idle',
}

export const ownerProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_OWNER_PRODUCTS_START:
			return {
				...state,
				// isLoading: true,
				fetchStatus: "pending",
				// error: ''
			}
		case FETCH_OWNER_PRODUCTS_SUCCESS:
			return {
				...state,
				// isLoading: false,
				fetchStatus: "success",
				productsData: action.payload
			}
		case FETCH_OWNER_PRODUCTS_FAILURE:
			return {
				...state,
				// isLoading: false,
				fetchStatus: "failure",
				error: action.payload
			}
		case RESET_FETCH_STATUS:
			return {
				...state,
				// isLoading: false,
				fetchStatus: "idle",
				error: action.payload
			}
		case POST_OWNER_PRODUCT_START:
			return {
				...state,
				// isLoading: true,
				error: '',
				// loadNewProduct: true,
				postStatus: "pending",
				//double check this one
			}
		case POST_OWNER_PRODUCT_SUCCESS:
			return {
				...state,
				// isLoading: false,
				// productsData: action.payload, //Not sure about this one
				productsData: [...state.productsData.concat(action.payload)],
				postStatus: "success",
				// loadNewProduct: false,
				//double check this one
			}
		case POST_OWNER_PRODUCT_FAILURE:
			return {
				...state,
				// isLoading: false,
				error: action.payload,
				// loadNewProduct: false,
				postStatus: "failure",
				//double check this one
			}
		case RESET_POST_STATUS:
			return {
				...state,
				postStatus: "idle"
			}
		case PUT_OWNER_PRODUCT_START:
			return {
				...state,
				// isLoading: true,
				error: '',
				putLoadingProduct: 'pending'
				//double check this one
			}
		case PUT_OWNER_PRODUCT_SUCCESS:
			console.log('action.payload.id from put owner', action.payload.id)

			let newProductsArray = [...state.productsData].find(product => product.id === action.payload.id)


			console.log('newProductsArray', newProductsArray)
			return {
				...state,
				// isLoading: false,
				productsData: [
					...state.productsData.slice(
						action.payload.id,
						0,
						action.payload)
				],


				// productsData: [
				//     ...state.productsData,
				//    [ action.payload.id] = action.payload
				// ], // not sure about this one
				putLoadingProduct: 'success'
				//double check this one
			}
		case PUT_OWNER_PRODUCT_FAILURE:
			return {
				...state,
				// isLoading: false,
				error: action.payload,
				putLoadingProduct: 'failure',
				//double check this one
			}
		case RESET_PUT_STATUS:
			return {
				...state,
				putLoadingProduct: 'idle'
			}
		case DELETE_OWNER_PRODUCT_START:
			return {
				...state,
				// isLoading: true,
				deleteStatus: "pending",
				// err: ''
			}
		case DELETE_OWNER_PRODUCT_SUCCESS:
			return {
				...state,
				// isLoading: false,
				deleteStatus: "success",
				productsData: [
					...state.productsData.slice(0, action.payload.id),
					...state.productsData.slice(action.payload + 1)
				],
				// double check this one
			}
		case DELETE_OWNER_PRODUCT_FAILURE:
			return {
				...state,
				// isLoading: false,
				deleteStatus: "failure",
				error: action.payload
				//double check this one
			}
		case RESET_DELETE_STATUS:
			return {
				...state,
				// isLoading: false,
				deleteStatus: "idle",
				error: action.payload
			}
		default:
			return state;
	}
}