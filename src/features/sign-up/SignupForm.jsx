import React from "react";
import useForm from "../../hooks/useForm";
import Input from "../shared/Input";
import styled from "styled-components";
import layout from "../layout";
const { Button } = layout;

const StyledForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const Form = ({ fields, handleSubmit }) => {
    let initState = {};
    fields.forEach(field => initState[field.name] = field.initVal ? field.initVal : "");
    const [values, handleChanges, clearForm] = useForm(initState);
    const handleSubmitLocal = (evt) => {
        evt.preventDefault();
        handleSubmit(values);
        clearForm();
    }
    return (
        <StyledForm onSubmit={handleSubmitLocal}>
            {
                fields.map(field => {
                    const { name, type, placeholder, className } = field;
                    return (
                        <Input
                            name={name}
                            type={type ? type : "text"}
                            placeholder={placeholder ? placeholder : name}
                            className={className ? className : ""}
                            value={values[name]}
                            onChange={handleChanges} />);
                })
            }
            <Button secondary>Submit</Button>
        </StyledForm>
    );
};

export default Form;