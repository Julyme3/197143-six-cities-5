import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {CitiesItem} from "./cities-item";

configure({adapter: new Adapter()});

it(`should call callback when button was clicked`, () => {
  const handleClickCity = jest.fn();

  const component = shallow(
      <CitiesItem
        city="Amsterdam"
        activeCity="Amsterdam"
        onClickHandler={handleClickCity}
      />
  );
  component.find(`li`).simulate(`click`);
  expect(handleClickCity).toHaveBeenCalledTimes(1);
});
