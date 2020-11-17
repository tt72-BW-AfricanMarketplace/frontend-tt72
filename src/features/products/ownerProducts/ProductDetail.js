import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import layout from '../../layout';
import Header from "../../shared/Header";


const { Heading, Container, Button, Link, Flex, Column, Card } = layout;

const initialItem = {
    item_name: '',
    amount: 0,
    unit: '',
    available: 0,
    price: '',
    currency: '',
}

const ProductDetail = (props) => {
    const { id } = useParams();
    const { isLoading, products, error } = props;
    const [inputValues, setInputValues] = useState(initialItem);

    useEffect(() => {
        let product = products.find(product => product.id == id)
        setInputValues(product)
    }, [])

    const handleChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // put functionality
    }

    return (
        <div>
            <Header />

            <Container>
                <form onSubmit={handleSubmit}>
                    <Flex three wrap>
                        <label>
                            Item Name
                        <input
                                type='text'
                                name='item_name'
                                onChange={handleChange}
                                value={inputValues.item_name}
                            />
                        </label>
                        <label>
                            Amount
                        <input
                                type='number'
                                name='amount'
                                onChange={handleChange}
                                value={inputValues.amount}
                            />
                        </label>
                        <label>
                            Unit
                        <input
                                type='text'
                                name='unit'
                                onChange={handleChange}
                                value={inputValues.unit}
                            />
                        </label>
                        <label>
                            Available
                        <input
                                type='text'
                                name='available'
                                onChange={handleChange}
                                value={inputValues.available}
                            />
                        </label>
                        <label>
                            Price
                        <input
                                type='text'
                                name='price'
                                onChange={handleChange}
                                value={inputValues.price}
                            />
                        </label>
                        <label>
                            Currency
                        <input
                                type='text'
                                name='currency'
                                onChange={handleChange}
                                value={inputValues.currency}
                            />
                        </label>
                    </Flex>
                    
                    <Container>
                        <Button type='submit'>Submit Changes</Button>
                        <Link to='/owner/products'>Cancel</Link>
                    </Container>
                
                </form>
            </Container>
        </div>
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

export default connect(mapStateToProps, { })(ProductDetail)

