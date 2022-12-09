import React from "react";
import * as S from './UserAccount.styled';

import AccountBalance from "./AccountBalance";
import AccountCurrencies from "./AccountCurrencies";

const UserAccount = () => {
    return (
        <S.Container>
            <S.TitleHeader>
                <S.Title>My Account</S.Title>
            </S.TitleHeader>
            <AccountBalance/>
            <AccountCurrencies/>
        </S.Container>
    )
}

export default UserAccount;