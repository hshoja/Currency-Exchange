import Freecurrencyapi from '@everapi/freecurrencyapi-js';

// Initialize the API with the key from environment variables
const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
const freecurrencyapi = new Freecurrencyapi(apiKey);

// Get latest exchange rates for all currencies
export const getLatestRates = async (baseCurrency = 'USD') => {
  try {
    const response = await freecurrencyapi.latest({
      base_currency: baseCurrency
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest rates:', error);
    throw error;
  }
};

// Get exchange rate between two specific currencies
export const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency
    });
    return response.data[toCurrency];
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
};

// Get list of available currencies
export const getCurrencies = async () => {
  try {
    const response = await freecurrencyapi.currencies();
    return response.data;
  } catch (error) {
    console.error('Error fetching currencies:', error);
    throw error;
  }
};

// Legacy API functions for backward compatibility
export const currenciesApi = (base = "USD") => {
  // This function is kept for backward compatibility but now returns a promise
  return getLatestRates(base);
};

export const convertApi = (from, to) => {
  // This function is kept for backward compatibility but now returns a promise
  return getExchangeRate(from, to);
};

