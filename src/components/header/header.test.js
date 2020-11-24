import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./header";

const AuthorizationStatus = {
  AUTH: `AUTH`,
};

test(`Header render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
