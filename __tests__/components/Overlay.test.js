import React from "react";
import renderer from "react-test-renderer";
import { Overlay } from "../../components/Overlay";

describe("Overlay", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Overlay />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
