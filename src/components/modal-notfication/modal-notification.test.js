import React from "react";
import renderer from "react-test-renderer";
import {ModalNotification} from "./modal-notification";

const noop = () => {};
const content = `Response status: 401 onUnauthorized`;

test(`ModalNotification render`, () => {
  const tree = renderer
    .create(
        <ModalNotification
          setNotification={noop}
          showError={true}
          content={content}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
