import React from "react";
import renderer from "react-test-renderer";
import { Scoresheet } from "../../components/Scoresheet";

describe("Scoresheet", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Scoresheet />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
