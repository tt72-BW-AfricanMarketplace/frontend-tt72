import React from 'react';
import { Switch, Route } from 'react-router-dom';
import layout from '../../layout';
import ProductDetail from './ProductDetail';
import { deleteOwnerProduct } from './store/actions';
import { connect } from 'react-redux'


const { Heading, Container, Button, Link, Flex, Column, Card } = layout;

const ProductThumbnail = (props) => {
    const { product, index, setRefresh } = props;

    const ownerId = 1 //change later

    const handleDelete = () => {
        props.deleteOwnerProduct(ownerId, product.id)
        setRefresh(true)
    }

    return (
        <Card primary delay={index * 125}>

            <Heading h3>
                {product.product_name}
            </Heading>
            <p>Original Amount: {product.all_amount} {product.measurement_unit}</p>
            <p>Current Available: {product.available_amount}</p>
            <p>Price: {product.price} {product.currency} each</p>

            <Link to={`/owner/products/${product.id}`} secondary='true'>
                Edit
            </Link>
            <Button onClick={() => handleDelete()} secondary='true'>Delete</Button>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.ownerProduct.isLoading,
        products: state.ownerProduct.productsData,
        error: state.ownerProduct.error,
        loadNewProduct: state.ownerProduct.loadNewProduct
    }
}


export default connect(mapStateToProps, { deleteOwnerProduct })(ProductThumbnail)