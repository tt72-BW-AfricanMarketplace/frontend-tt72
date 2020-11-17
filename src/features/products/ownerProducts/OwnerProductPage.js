import React from 'react'
import { connect } from 'react-redux';

import { fetchOwnerProducts } from './store/actions' 

const OwnerProductPage = (props) => {
    return (
        <div>
            This is Product Page
             
            {
                props.isLoading ? <p>Loading Products</p> : null
            }
            {
                props.error ? <p>{props.error}</p> : null
            }
            {
                props.products.map((product, idx) => {

                    return (
                        <div key={idx}>
                            <p>{product.item_name}</p>

                        </div>
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('state from page',state.ownerProduct.productsData)
    return {
        isLoading: state.ownerProduct.isLoading,
        products: state.ownerProduct.productsData,
        error: state.ownerProduct.error,
        loadNewProduct: state.ownerProduct.loadNewProduct
    }
}

export default connect(mapStateToProps, { fetchOwnerProducts })(OwnerProductPage)