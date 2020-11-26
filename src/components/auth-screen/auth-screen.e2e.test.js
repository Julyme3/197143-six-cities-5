import React from "react";
import {configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";

jest.mock(`../../layouts/main-layout/main-layout.jsx`, () => `main-layout`);

configure({adapter: new Adapter()});

const mock = {
  preventDefault() {}
};

it(`should call callback when form was submitted`, () => {
  const handleSubmit = jest.fn();

  const component = mount(
      <AuthScreen
        onSubmit={handleSubmit}
      />
  );

  component.find(`.login__form`).simulate(`submit`, mock);
  expect(handleSubmit).toHaveBeenCalledTimes(0);

  component.instance().emailRef.current.value = `test@test.ru`;
  component.instance().passwRef.current.value = `123456`;
  component.find(`.login__form`).simulate(`submit`, mock);
  expect(handleSubmit).toHaveBeenCalledTimes(1);

});
