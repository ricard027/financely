import { render } from "@testing-library/react";
import { ButtonComponent } from "./button-component";

describe("Button component", () => {
  it("should be render with correct children", () => {
    const { getByText } = render(
      <ButtonComponent>lorem ipsun</ButtonComponent>
    );
    getByText("lorem ipsun");
  });
});
