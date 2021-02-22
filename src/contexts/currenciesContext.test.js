import { render, screen } from "@testing-library/react";
import React from "react";
import { Currencies } from "../pages/currencies";
import CurrenciesProvider from "../providers/CurrenciesProvider";

describe("Test Context Provider", () => {
  const customRender = (ui, values) =>
    render(
      <CurrenciesProvider.Provider value={values}>
        {ui}
      </CurrenciesProvider.Provider>
    );

  test("CurrenciesProvider shows value from provider", () => {
    const values = {
      rates: [
        ["AUD", 1.268762],
        ["BGN", 1.614],
        ["CZK", 21.3595],
      ],
      loading: false,
      updateRates: () => {},
      updateLoading: () => {},
    };
    customRender(<Currencies />, values);
    expect(screen.queryAllByTestId("row")).toHaveLength(3);
  });
});
