import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("check valid routing", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(wrapper.find(HomePage)).toHaveLength(1);
});
