import React from "react";
import renderer from "react-test-renderer";
import { Heading } from "../../components/Heading";

describe("Heading", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Heading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
