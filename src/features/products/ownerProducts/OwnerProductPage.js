import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchOwnerProducts, postOwnerProduct } from './store/actions' 

import layout from '../../layout';
import ProductThumbnail from './ProductThumbnail';
import Header from "../../shared/Header";

const { Heading, Container, Button, Link, Flex, Column, Card } = layout;


const initialItem = {
    product_name: '',
    all_amount: 0,
    measurement_unit: '',
    // available_amount: 0,
    price: '',
    currency: '',
}

const OwnerProductPage = (props) => {
    const [ addActive, setAddActive ] = useState(false)
    const [formItem, setFormItem] = useState(initialItem)
    const [refresh, setRefresh] = useState(false)
    const id = 1; // fix with log in token later

    useEffect(() => {
        props.fetchOwnerProducts(id)
        setRefresh(false)
    }, [props.loadNewProduct, refresh])

    const handleClick = () => {
        setAddActive(!addActive)
    }
    
    const handleChange = e => {
        setFormItem({
            ...formItem,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.postOwnerProduct(id, formItem);
        setFormItem(initialItem)
        setRefresh(true)
    }

    return (
        <div>
            <Header />

            <Container> 
                
                {
                    props.isLoading ? <p>Loading Products</p> : null
                }
                {
                    props.error ? <p>{props.error}</p> : null
                }

                <Flex>
                    <Column>
                        <Button onClick={handleClick} >
                            Add New Item
                        </Button>

                        {
                            addActive
                                ? 

                                <form onSubmit={handleSubmit}>
                                    <Flex column>
                                        <label>
                                            Item Name
                                            <input
                                                type='text'
                                                name='product_name'
                                                onChange={handleChange}
                                                value={formItem.product_name}
                                            />
                                        </label>
                                        <label>
                                            Amount
                                            <input
                                                type='number'
                                                name='all_amount'
                                                onChange={handleChange}
                                                value={formItem.all_amount}
                                            />
                                        </label>
                                        <label>
                                            Unit
                                            <input
                                                type='text'
                                                name='measurement_unit'
                                                onChange={handleChange}
                                                value={formItem.measurement_unit}
                                            />
                                        </label>
                                        {/* <label>
                                            Available
                                            <input
                                                type='number'
                                                name='available_amount'
                                                onChange={handleChange}
                                                value={formItem.available_amount}
                                            />
                                        </label> */}
                                        <label>
                                            Price
                                            <input
                                                type='text'
                                                name='price'
                                                onChange={handleChange}
                                                value={formItem.price}
                                            />
                                        </label>
                                        <label>
                                            Currency
                                            <input
                                                type='text'
                                                name='currency'
                                                onChange={handleChange}
                                                value={formItem.currency}
                                            />
                                        </label>
                                
                                    </Flex>
                                    <Container>
                                        <Button type='submit'>Add Item</Button>
                                    </Container>

                                </form>
                                : null
                        }
                    </Column>

                    <Column>
                        {
                            props.products.map((product, idx) => {

                                return (
                                    <ProductThumbnail
                                        key={idx}
                                        product={product}
                                        index={idx}
                                        setRefresh={setRefresh}
                                    />



                                )
                            })
                        }
                    </Column>
                </Flex>
            

            </Container>
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

export default connect(mapStateToProps, { fetchOwnerProducts, postOwnerProduct })(OwnerProductPage)