import PropTypes from "prop-types";
import ConverterProvider from "./ConverterProvider";
import CurrenciesProvider from "./CurrenciesProvider";

const AllProviders = ({ children }) => (
  <ConverterProvider>
    <CurrenciesProvider>{children}</CurrenciesProvider>
  </ConverterProvider>
);

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProviders;
