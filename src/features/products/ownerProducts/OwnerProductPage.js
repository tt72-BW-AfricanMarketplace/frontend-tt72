import React from 'react'
import { connect } from 'react-redux';
import { fetchOwnerProducts } from './store/actions' 
import layout from '../../layout';
import ProductThumbnail from './ProductThumbnail';

const { Heading, Container, Button, Link, Flex, Column, Card } = layout;



const OwnerProductPage = (props) => {
    return (
        <Container>
            This is Product Page
             
            {
                props.isLoading ? <p>Loading Products</p> : null
            }
            {
                props.error ? <p>{props.error}</p> : null
            }

            <Flex>
                {
                    props.products.map((product, idx) => {

                        return (
                            <ProductThumbnail
                                key={idx}
                                product={product}
                                index={idx}
                            />
                               

                            
                        )
                    })
                }
            </Flex>
            

        </Container>
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