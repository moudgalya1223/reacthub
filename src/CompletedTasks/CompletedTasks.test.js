import React from "react";
import { shallow } from "enzyme";
import CompletedTasks from "./CompletedTasks";

describe("CompletedTasks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CompletedTasks />);
    expect(wrapper).toMatchSnapshot();
  });
});
