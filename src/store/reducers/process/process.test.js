import {APIRoute, Cities} from "../../../const";
import {process} from "./process";
import {ActionType} from "../../actions";
import MockAdapter from "axios-mock-adapter";
import {postCommentAction} from "../../api-actions";
import {createApi} from "../../../services/api";

const api = createApi(() => {});
const ID = 1;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(process(void 0, {})).toEqual({
    activeCity: Cities[0],
    isLoading: false,
    commentStatus: false,
  });
});

it(`Reducer should update isLoading when start load`, () => {
  expect(process({
    isLoading: false,
  }, {
    type: ActionType.SET_START_LOADING_ACTION,
  })).toEqual({
    isLoading: true,
  });
});

it(`Reducer should update isLoading when stop load`, () => {
  expect(process({
    isLoading: true,
  }, {
    type: ActionType.SET_STOP_LOADING_ACTION,
  })).toEqual({
    isLoading: false,
  });
});

it(`Reducer should update comment status when comment was posted`, () => {
  expect(process({
    commentStatus: false,
  }, {
    type: ActionType.SET_POST_COMMENT_STATUS_ACTION,
  })).toEqual({
    commentStatus: true,
  });
});

describe(`Should make a correct async actions`, () => {
  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeData = {
      rating: 4,
      comment: `text`,
    };
    const postCommentLoader = postCommentAction(ID, fakeData);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${ID}`)
      .reply(200, [{fake: true}]);

    return postCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_POST_COMMENT_STATUS_ACTION,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, expect.any(Function));
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_STOP_LOADING_ACTION,
        });
      });
  });
});

