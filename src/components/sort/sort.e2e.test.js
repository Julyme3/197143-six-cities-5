import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {Sort} from "./sort";
import {SortType} from "../../const";

configure({adapter: new Adapter()});

it(`should call callback when button was clicked`, () => {
  const handleClickSort = jest.fn();

  const component = shallow(
      <Sort
        onClickSort={handleClickSort}
        activeSortType="Popular"
      />
  );
  component.find(`li`).at(1).simulate(`click`);
  expect(handleClickSort).toHaveBeenCalledTimes(1);
  expect(handleClickSort.mock.calls[0][0]).toBe(SortType[`PRICE_TO_HIGH`]);
});
