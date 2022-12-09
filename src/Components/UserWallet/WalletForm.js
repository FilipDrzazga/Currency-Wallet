import React from "react";
import * as S from './WalletForm.styled';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { saveLocalStorage, } from "../store/WalletSlice";
import { getCurrencyRate } from "../store/WalletSlice";
import { inputs, allCurrenciesCodeRegex, currencyValueRegex, dateFormatRegex, currencyPurchasePriceRegex } from "../helpers";
import { Button } from "../styled/shared";

const WalletForm = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            currencyCode: '',
            currencyValue: '',
            purchaseDate: '',
            purchasePrice: ''
        },
        onSubmit: (values, { resetForm }) => {
            dispatch(getCurrencyRate(values));
            dispatch(saveLocalStorage({name:'currencies',value:values}));
            resetForm({ ...values});
        },
        validationSchema: Yup.object({
            currencyCode: Yup.string().matches(allCurrenciesCodeRegex, '*Invalid ISO currency code').uppercase().required('*Required'),
            currencyValue: Yup.string().matches(currencyValueRegex, '*Invalid value of currency').required('*Required'),
            purchaseDate: Yup.string().matches(dateFormatRegex, '*YYYY-MM-DD').required('*Required'),
            purchasePrice: Yup.string().matches(currencyPurchasePriceRegex, '*e.g 5.45').required('*Required')
        })
    });

    return (
        <S.FormSection>
            <S.Form onSubmit={formik.handleSubmit}>
                {inputs.map((input, id)=>(
                <S.InputContainer key={id}>
                    <S.Label htmlFor={input.htmlFor}>{input.labelText}</S.Label>
                    <S.Input
                        id={input.id}
                        name={input.name}
                        type={input.type}
                        placeholder={input?.placeholder}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[input.name]}
                    />
                    {formik.touched[input.name] && formik.errors[input.name] && <S.ErrorMessage>{formik.errors[input.name]}</S.ErrorMessage>}
                </S.InputContainer>
                ))}
                <Button disabled={!(formik.isValid && formik.dirty)} type="submit" height='7'>Add currency</Button>
            </S.Form>
        </S.FormSection>
    )
}

export default WalletForm;