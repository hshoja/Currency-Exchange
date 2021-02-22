import React from "react";
import ReactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import { Currencies } from ".";
import ConverterContext from "../../contexts/ConverterContext";

describe("Currencies", () => {
  test("render <Currencies />", () => {
    const box = document.createElement("div");
    ReactDom.render(<Currencies />, box);
    ReactDom.unmountComponentAtNode(box);
  });

  test("ConverterContext shows default value", () => {
    render(<Currencies />);
    expect(screen.queryAllByTestId("row")).toHaveLength(0);
  });

  const customRender = (ui, values) =>
    render(
      <ConverterContext.Provider value={values}>{ui}</ConverterContext.Provider>
    );

  test("Currencies show value in table from provider", () => {
    const values = {
      rates: [["AUD", "1.268762"]],
      loading: false,
      updateRates: () => {},
      updateLoading: () => {},
    };
    customRender(<Currencies />, values);
    expect(screen.getByText("AUD")).toBeTruthy();
    expect(screen.getByText("1.268762")).toBeTruthy();
  });
});
