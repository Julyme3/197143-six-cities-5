import React from "react";
import renderer from "react-test-renderer";
import {MainLayout} from "./main-layout";

jest.mock(`../../components/modal-notfication/modal-notification`, () => `ModalNotification`);
jest.mock(`../../components/header/header`, () => `Header`);

test(`MainLayout render`, () => {
  const tree = renderer
    .create(
        <MainLayout
          className="className"
          classNameWrap="classNameWrap"
        >
          <React.Fragment />
        </MainLayout>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
