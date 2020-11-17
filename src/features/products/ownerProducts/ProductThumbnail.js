import React from 'react'
import layout from '../../layout';

const { Heading, Container, Button, Link, Flex, Column, Card } = layout;

const ProductThumbnail = (props) => {
    const { product, index } = props;
    return (
        <Card primary delay={index * 125}>

            <Heading h3>
                {product.item_name}
            </Heading>
            <p>Original Amount: {product.amount} {product.unit}</p>
            <p>Current Available: {product.available}</p>
            <p>Price: {product.price} {product.currency} each</p>

            <Link secondary='true'>
                Details
            </Link>

        </Card>
    )
}

export default ProductThumbnail;