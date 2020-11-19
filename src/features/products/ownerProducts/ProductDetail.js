import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import layout from '../../layout';
import Header from "../../shared/Header";
import { putOwnerProduct } from './store/actions';


const { Heading, Container, Button, Link, Flex, Column, Card } = layout;

const initialItem = {
    product_name: '',
    all_amount: 0,
    measurement_unit: '',
    available: 0,
    price: '',
    currency: '',
}

const ProductDetail = (props) => {
    const { id } = useParams();
    const { isLoading, products, error } = props;
    const [inputValues, setInputValues] = useState(initialItem);
    const userId = 1; ///get from cookie/token later
    const { push } = useHistory();

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

        props.putOwnerProduct(userId, id, inputValues)
        //update passed prop state

        push(`/owner/products`);


    }

    return (
        <div>
            <Header />

            <Container>
                <form onSubmit={handleSubmit}>
                    <Flex column>
                        <label>
                            Item Name
                        <input
                                type='text'
                                name='product_name'
                                onChange={handleChange}
                                value={inputValues.product_name}
                            />
                        </label>
                        <label>
                            Amount
                        <input
                                type='number'
                                name='all_amount'
                                onChange={handleChange}
                                value={inputValues.all_amount}
                            />
                        </label>
                        <label>
                            Unit
                        <input
                                type='text'
                                name='measurement_unit'
                                onChange={handleChange}
                                value={inputValues.measurement_unit}
                            />
                        </label>
                        <label>
                            Available
                        <input
                                type='number'
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

export default connect(mapStateToProps, { putOwnerProduct })(ProductDetail)

