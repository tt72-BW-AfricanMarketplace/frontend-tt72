import React from 'react';
import { Switch, Route } from 'react-router-dom';
import layout from '../../layout';
import ProductDetail from './ProductDetail';

const { Heading, Container, Button, Link, Flex, Column, Card } = layout;

const ProductThumbnail = (props) => {

    const handleDelete = () => {
        //insert stuff here
    }

    const { product, index } = props;
    return (
        <Card primary delay={index * 125}>

            <Heading h3>
                {product.item_name}
            </Heading>
            <p>Original Amount: {product.amount} {product.unit}</p>
            <p>Current Available: {product.available}</p>
            <p>Price: {product.price} {product.currency} each</p>

            <Link to={`/owner/products/${product.id}`} secondary='true'>
                Edit
            </Link>
            <Button onClick={() => handleDelete()} secondary='true'>Delete</Button>
        </Card>
    )
}



export default ProductThumbnail;