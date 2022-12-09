import React from "react";
import * as S from './AccountCurrencies.styled';
import { Text } from "../styled/shared";

import ChartBar from "../chart/ChartBar";

const AccountCurrencies = () => {
    return (
        <S.CurrenciesSection>
            <S.CurrenciesHeader>
                <Text>Top currencies:</Text>
            </S.CurrenciesHeader>
            <S.CurrenciesChartContainer>
                <ChartBar />
            </S.CurrenciesChartContainer>
        </S.CurrenciesSection>
    )
}

export default AccountCurrencies;