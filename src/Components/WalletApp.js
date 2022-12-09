import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate, getAllCurrenciesCode, addMainCurrency } from "./store/WalletSlice";
import { isUserLogin } from "./store/UserSlice";

import UserAccount from "./UserAccount/UserAccount";
import UserHistory from "./UserHistory/UserHistory";
import UserWallet from "./UserWallet/UserWallet";
import CurrenciesPicker from "./CurrenciesPicker/CurrenciesPicker";
import Menu from "./Menu/Menu";


const WalletApp = () => {

    const [page, setPage] = useState(0);
    const isLogin = useSelector(state => state.user.isLogin);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isUserLogin());
        dispatch(addMainCurrency());
        dispatch(getCurrencyRate());
        dispatch(getAllCurrenciesCode());
    }, [])

    const displayPage = (id) => {
        setPage(id);
    };

    const listOfComponents = [UserAccount, UserHistory, UserWallet];
    const Component = listOfComponents[page];

    return (
        <>
            {!isLogin && <CurrenciesPicker/>}
            {isLogin && <Component/>}
            {isLogin && <Menu activePage={page} displayPage={displayPage}/> }
        </>
    )
}

export default WalletApp;