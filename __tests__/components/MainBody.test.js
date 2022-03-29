import React from "react";
import renderer from "react-test-renderer";
import { MainBody } from "../../components/MainBody";

describe("MainBody", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<MainBody />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
