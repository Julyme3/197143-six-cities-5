import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

jest.mock(`../main-screen/main-screen`, () => `MainScreen`);
jest.mock(`../auth-screen/auth-screen`, () => `AuthScreen`);
jest.mock(`../room-screen/room-screen`, () => `RoomScreen`);
jest.mock(`../favorites-screen/favorites-screen`, () => `FavoritesScreen`);

const AuthorizationStatus = {
  AUTH: `AUTH`,
};

test(`App render`, () => {
  const tree = renderer
    .create(<App
      authorizationStatus={AuthorizationStatus.AUTH}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
