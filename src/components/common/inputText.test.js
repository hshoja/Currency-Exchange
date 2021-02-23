import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import ConverterContext from "../../contexts/ConverterContext";
import Converter from "../../pages/converter/Converter";
import InputText from "./InputText";

describe("Input Text", () => {
  test("render <InputText />", () => {
    const box = document.createElement("div");
    ReactDom.render(<InputText value="test" onChange={() => {}} />, box);
    ReactDom.unmountComponentAtNode(box);
  });

  const customRender = (ui, values) =>
    render(
      <ConverterContext.Provider value={values}>{ui}</ConverterContext.Provider>
    );

  const values = {
    values: {
      loading: false,
      fromCurrency: "USD",
      toCurrency: "CAD",
      fromAmount: "1000",
      toAmount: "",
    },
    handlres: {
      updateLoading: () => {},
      updateFromAmount: () => {},
      updateToAmount: () => {},
      updateFromCurrency: () => {},
      updateToCurrency: () => {},
    },
  };

  test("InputText shows value from provider", () => {
    const { getAllByDisplayValue } = customRender(<Converter />, values);
    getAllByDisplayValue("1000");
  });
});
