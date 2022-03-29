import React from "react";
import renderer from "react-test-renderer";
import { GameBoard } from "../../components/GameBoard";

describe("GameBoard", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<GameBoard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
