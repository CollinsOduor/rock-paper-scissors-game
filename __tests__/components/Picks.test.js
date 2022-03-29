import React from "react";
import renderer from "react-test-renderer";
import { Picks } from "../../components/Picks";

describe("Picks", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Picks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
