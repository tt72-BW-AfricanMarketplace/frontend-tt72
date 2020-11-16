import React from "react";
import Header from "../shared/Header"
import "./signup.css"
import styled from "styled-components"

const CustomHeader = styled(Header)`
    height:1200px;
`

const SignupPage = props => {
    return (
        <>
            <CustomHeader className="cust" />
            <div className="example">

            </div>
        </>
    )
}

export default SignupPage