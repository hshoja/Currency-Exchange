export const URL_BASE = "https://api.exchangerate.host";

export const URL_CURRENCIES =
  URL_BASE +
  "/latest?base=USD";
  // "/latest?base=USD&symbols=EUR,JPY,BGN,CZK,GBP,HUF,PLN,RON,SEK,CHF.ISK,NOK,HRK,RUB,TRY,AUD";

export const URL_CONVERT = (from, to) =>
  `${URL_BASE}/convert?from=${from}&to=${to}`;
