import React from "react";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";

jest.mock(`../../layouts/main-layout/main-layout`, () => `MainLayout`);

test(`AuthScreen render`, () => {
  const tree = renderer
    .create(
        <AuthScreen
          onSubmit={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
