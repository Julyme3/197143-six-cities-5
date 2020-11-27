import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withForm from "./with-form";

configure({adapter: new Adapter()});

const noop = () => {};
const MockComponent = () => <div />;
const MockComponentWrapped = withForm(MockComponent);

test(`Should change props`, () => {
  const handle = jest.fn();
  const wrappedComponent = shallow(<MockComponentWrapped
    id="2"
    commentPostAction={noop}
    isLoading={false}
    commentStatus={true}
    setStartLoading={handle}
  />);

  expect(wrappedComponent.props().ratingValue).toEqual(``);

  wrappedComponent.props().onFieldChange({
    target: {name: `rating`, value: `5`}
  });
  expect(wrappedComponent.props().ratingValue).toEqual(`5`);

  wrappedComponent.props().onFieldChange({
    target: {name: `comment`, value: `text`}
  });
  expect(wrappedComponent.props().commentValue).toEqual(`text`);
});
