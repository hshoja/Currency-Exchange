import ReactDOM from "react-dom";
import { PageTitle } from "..";
import { render, screen } from "@testing-library/react";
describe("Page Title", () => {
  test("<PageTitle/> renders", () => {
    const box = document.createElement("div");
    ReactDOM.render(<PageTitle />, box);
    ReactDOM.unmountComponentAtNode(box);
  });

  test("PageTitle shows props", () => {
    render(<PageTitle title="title" description="desc" />);
    expect(screen.getByText("title")).toBeTruthy();
    expect(screen.getByText("desc")).toBeTruthy();
  });
});
