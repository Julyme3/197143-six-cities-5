import {
  ActionType,
  setOffersAction,
  setPostCommentStatusAction,
  setSelectedCityAction,
  setStartLoadingAction,
  setStopLoadingAction,
} from "./actions";

describe(`Action creators work correctly`, () => {
  it(`Action creator for setStartLoadingAction returns action with undefined payload`, () => {
    expect(setStartLoadingAction())
      .toEqual({
        type: ActionType.SET_START_LOADING_ACTION,
      });
  });

  it(`Action creator for setStopLoadingAction returns action with undefined payload`, () => {
    expect(setStopLoadingAction())
      .toEqual({
        type: ActionType.SET_STOP_LOADING_ACTION,
      });
  });

  it(`Action creator for setPostCommentStatusAction returns action with undefined payload`, () => {
    expect(setPostCommentStatusAction())
      .toEqual({
        type: ActionType.SET_POST_COMMENT_STATUS_ACTION,
      });
  });

  it(`Action creator for setOffersAction returns correct action`, () => {
    expect(setOffersAction([{fake: true}])).toEqual({
      type: ActionType.SET_OFFERS_ACTION,
      payload: [{fake: true}]
    });
  });

  it(`Action creator for setSelectedCityAction returns correct action`, () => {
    expect(setSelectedCityAction(`Amsterdam`)).toEqual({
      type: ActionType.SET_SELECTED_CITY_ACTION,
      payload: `Amsterdam`,
    });
  });
});
