import {notification} from "./notification";
import {ActionType} from "../../actions";

const notificationMockData = {
  showError: true,
  content: `Error`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(notification(void 0, {})).toEqual({
    showError: false,
    content: ``,
  });
});

it(`Reducer should update showError and content when happen wrong`, () => {
  expect(notification({
    showError: false,
    content: ``,
  }, {
    type: ActionType.SET_NOTIFICATION_ACTION,
    payload: notificationMockData,
  })).toEqual({
    showError: notificationMockData.showError,
    content: notificationMockData.content,
  });
});
