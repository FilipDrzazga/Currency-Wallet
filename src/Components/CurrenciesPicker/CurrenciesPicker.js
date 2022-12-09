import React from "react";
import * as S from './CurrenciesPicker.styled';

import { useDispatch, useSelector } from "react-redux";
import { addMainCurrency } from "../store/WalletSlice";
import { userLogin } from "../store/UserSlice";



const CurrenciesPicker = () => {

    const currenciesCode = useSelector(state => state.wallet.allCurrenciesCode);
    const dispatch = useDispatch();

    const handleClick = (currency) => {
        dispatch(addMainCurrency(currency));
        dispatch(userLogin(true));
    }

    return (
        <S.Container>
            <S.TitleHeader>
                <S.Title>Choose your currency:</S.Title>
            </S.TitleHeader>
            <S.CurrenciesListItems>
                {currenciesCode.map((code,id) => {
                    return <S.CurrenciesItem onClick={()=>handleClick(code.code)} key={id}>{code.name}</S.CurrenciesItem>
                })}
            </S.CurrenciesListItems>
        </S.Container>
    )
}

export default CurrenciesPicker;