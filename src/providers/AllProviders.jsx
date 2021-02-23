import React from "react";
import ConverterProvider from "./ConverterProvider";
import CurrenciesProvider from "./CurrenciesProvider";

const AllProviders = ({ children }) => (
  <ConverterProvider>
    <CurrenciesProvider>{children}</CurrenciesProvider>
  </ConverterProvider>
);

export default AllProviders;
