export const URL_BASE = "https://api.exchangerate.host";

export const urlCurrencies = (base = "USD") =>
  `${URL_BASE}/latest?base=${base}`;
// "/latest?base=USD&symbols=EUR,JPY,BGN,CZK,GBP,HUF,PLN,RON,SEK,CHF.ISK,NOK,HRK,RUB,TRY,AUD";

export const urlConvert = (from, to) => `${URL_BASE}/convert?from=${from}&to=${to}`;
