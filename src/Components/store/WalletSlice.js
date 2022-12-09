import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exchangeratesApi from '../API/ExchangeratesAPI';

const api = new exchangeratesApi();


export const getCurrencyRate = createAsyncThunk('walletSlice',
    async (data, thunkAPI) => {

        const { dispatch, getState } = thunkAPI;
        const userCurrency = getState().wallet?.mainCurrency;

        const localStorageItems = JSON.parse(localStorage.getItem('currencies') || null);

        if (data) {
            const currentRate = await api.getCurrencyRate(userCurrency, data.currencyCode);
            const updateCurrencyRate = [{ ...data, rate: currentRate.toFixed(2), }];
            dispatch(addCurrency(updateCurrencyRate));
        } else {
            if (localStorageItems) {
                const promises = localStorageItems.map(async (currency) => {
                    const currentRate = await api.getCurrencyRate(userCurrency, currency.currencyCode);
                    return { ...currency, rate: currentRate.toFixed(2) };
                });
                const updateCurrenciesRate = await Promise.all(promises);
                dispatch(addCurrency(updateCurrenciesRate));
            };
        };
    });

export const getAllCurrenciesCode = createAsyncThunk('walletSlice',
    async (_, thunkAPI) => {

        const { dispatch } = thunkAPI;

        const existLocalStorage = JSON.parse(localStorage.getItem('allCurrenciesCode') || null);
        if (existLocalStorage) {
            dispatch(addCurrenciesCode(existLocalStorage));
        } else {
            const symbols = await api.getAllCurrencyCode();
            localStorage.setItem('allCurrenciesCode', JSON.stringify(symbols));
            dispatch(addCurrenciesCode(symbols));
        }
    });

const initialState = {
    currencies: [],
    allCurrenciesCode: [],
    mainCurrency: false,
}

const walletSlice = createSlice({
    initialState,
    name: 'wallet',
    reducers: {
        addCurrency: (state, action) => {
            state.currencies.push(...action.payload);
        },
        addCurrenciesCode: (state, action) => {
            const code = Object.keys(action.payload).map(code => {
                return { name: `${[code]} - ${action.payload[code] }`,code:code };
            });
            state.allCurrenciesCode.push(...code);
        },
        addMainCurrency: (state, action) => {
            const existLocalStorage = localStorage.getItem('mainCurrency');
            if (existLocalStorage) {
                const localStorageItem = JSON.parse(existLocalStorage);
                state.mainCurrency = localStorageItem;
            }
            if (action.payload) {
                state.mainCurrency = action.payload;
                localStorage.setItem('mainCurrency', JSON.stringify(action.payload));
            }
        },
        saveLocalStorage: (state, action) => {
            const { name, value } = action.payload;
            const existLocalStorage = localStorage.getItem(name);
            const store = existLocalStorage ? JSON.parse(localStorage.getItem(name)) : [];
            store.push(value);
            localStorage.setItem(name, JSON.stringify(store));
        },
    },
    }
);

export const { addCurrency, saveLocalStorage, addCurrenciesCode, addMainCurrency } = walletSlice.actions;
export default walletSlice.reducer;