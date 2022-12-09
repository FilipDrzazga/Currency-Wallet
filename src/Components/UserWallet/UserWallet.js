import React from "react";
import * as S from './UserWallet.styled';

import WalletForm from "./WalletForm";

const UserWallet = () => {
    return (
        <S.Container>
            <S.TitleHeader>
                <S.Title>Wallet</S.Title>
            </S.TitleHeader>
            <WalletForm/>
        </S.Container>
    )
}

export default UserWallet;