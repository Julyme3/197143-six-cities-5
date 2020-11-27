import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should activeItem eq null`, () => {
  const wrappedComponent = shallow(<MockComponentWrapped />);
  expect(wrappedComponent.state().activeItem).toEqual(null);
});
