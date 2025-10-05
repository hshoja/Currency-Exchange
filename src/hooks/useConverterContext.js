import { useContext } from "react";
import ConverterContext from "../contexts/ConverterContext";

const useConverterContext = () => {
  const context = useContext(ConverterContext);
  
  if (!context) {
    throw new Error("useConverterContext must be used within a ConverterProvider");
  }
  
  return context;
};

export default useConverterContext;
