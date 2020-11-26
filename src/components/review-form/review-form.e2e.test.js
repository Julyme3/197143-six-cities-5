import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./review-form";

configure({adapter: new Adapter()});

const noop = () => {};
const mock = {
  preventDefault() {}
};

test(`should call callback when button submit was clicked`, () => {
  const handleSubmit = jest.fn();

  const component = shallow(
      <ReviewForm
        onFieldChange={noop}
        onSubmit={handleSubmit}
        isDisabled={false}
        commentValue="Text for user comment"
        ratingValue="4.8"
      />
  );
  component.simulate(`submit`, mock);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
