import React from "react";

import ResetStyle from "./styled/Reset";
import { ThemeProvider } from 'styled-components';
import theme from "./styled/theme";
import { Provider } from "react-redux";
import { store } from "./store/store";

import WalletApp from "./WalletApp";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <ResetStyle/>
                <ThemeProvider theme={theme}>
                    <WalletApp/>
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default App;