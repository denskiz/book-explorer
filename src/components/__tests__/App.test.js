import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import Navbar from "components/Navbar";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("Shows a navigation bar", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});

it("Shows a input", () => {
  expect(wrapped.find("input").length).toEqual(1);
});

describe("the input", () => {
  beforeEach(() => {
    wrapped
      .find("input")
      .simulate("change", { target: { value: "new query" } });
    wrapped.update();
  });
  it("Has a input that users can type it", () => {
    expect(wrapped.find("input").prop("value")).toEqual("new query");
  });

  it("When form is submitted, input gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("input").prop("value")).toEqual("");
  });
});
