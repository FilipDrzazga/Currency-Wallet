import React, { useState, useEffect } from "react";
import * as S from './AccountBalance.styled';
import { Text } from "../styled/shared";
import { currencyFormat } from "../helpers";

import { useSelector } from "react-redux";

const AccountBalance = () => {

    const walletCurrencies = useSelector(state => state.wallet?.currencies);
    const mainCurrecy = useSelector(state => state.wallet?.mainCurrency);

    const [userBalance, setUserBalance] = useState(0);

    useEffect(() => {
        totalAmount()
    },[walletCurrencies])

    const totalAmount = () => {
        const total = walletCurrencies.map(item => {
            return item.currencyValue * item.rate
        }).reduce((reducer, currentValue) => {
            return reducer + currentValue
        }, 0);
        setUserBalance(total.toFixed(2).replace(currencyFormat, '$&,'));
    }

    return (
        <S.BalanceSection>
            <S.BalanceHeader>
                <Text>Total balance:</Text>
            </S.BalanceHeader>
            <S.BalanceDiv>
                <S.BalanceValue>{userBalance}{mainCurrecy}</S.BalanceValue>
            </S.BalanceDiv>
        </S.BalanceSection >
    )
}

export default AccountBalance;