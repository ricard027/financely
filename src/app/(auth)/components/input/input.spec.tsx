import { render } from "@testing-library/react";
import InputComponent from "./input-component";

describe("input Component", () => {
  it("should be render with error if hasError is true", () => {
    const { getByPlaceholderText } = render(
      <InputComponent placeholder="lorem ipsun" hasError={true} />
    );
    const input = getByPlaceholderText("lorem ipsun");
    expect(input).toHaveStyle({ border: "border-solid border-red-500" });
  });
});
