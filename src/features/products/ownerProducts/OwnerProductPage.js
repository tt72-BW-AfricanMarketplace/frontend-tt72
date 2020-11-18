import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchOwnerProducts } from './store/actions' 
import layout from '../../layout';
import ProductThumbnail from './ProductThumbnail';
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

const OwnerProductPage = (props) => {
    const [ addActive, setAddActive ] = useState(false)
    const [ formItem, setFormItem ] = useState(initialItem)

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

        // add functionality
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
                                                name='item_name'
                                                onChange={handleChange}
                                                value={formItem.item_name}
                                            />
                                        </label>
                                        <label>
                                            Amount
                                            <input
                                                type='number'
                                                name='amount'
                                                onChange={handleChange}
                                                value={formItem.amount}
                                            />
                                        </label>
                                        <label>
                                            Unit
                                            <input
                                                type='text'
                                                name='unit'
                                                onChange={handleChange}
                                                value={formItem.unit}
                                            />
                                        </label>
                                        <label>
                                            Available
                                            <input
                                                type='number'
                                                name='available'
                                                onChange={handleChange}
                                                value={formItem.available}
                                            />
                                        </label>
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

export default connect(mapStateToProps, { fetchOwnerProducts })(OwnerProductPage)