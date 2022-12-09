import { API_KEY } from "./API_KEY";

class exchangeratesApi {
    constructor() {
        this.apiRate = 'https://api.apilayer.com/exchangerates_data/latest?symbols';
        this.apiCode = 'https://api.apilayer.com/exchangerates_data/symbols';
        this.api_key = API_KEY;
        this.options = {
            method: 'GET',
            redirect: 'follow',
            headers: { 'apikey': `${this.api_key}` }
        };
    }

    async getCurrencyRate(fromCurrency, toCurrency) {
        try {
            const response = await fetch(`${this.apiRate}=${fromCurrency}&base=${toCurrency}`, this.options);
            if (!response.ok) throw new Error('Can not fetch data');

            const { rates } = await response.json();
            const [ currentRate ] = Object.values(rates);
            return currentRate;

        } catch (error) {
            alert(`${error.message}`);
        }
    }

    async getAllCurrencyCode() {
        try {
            const response = await fetch(`${this.apiCode}`, this.options);
            if (!response.ok) throw new Error('Can not fetch data');

            const { symbols } = await response.json();
            return symbols;

        } catch (error) {
            alert(`${error.message}`);
        }
    }
}

export default exchangeratesApi;