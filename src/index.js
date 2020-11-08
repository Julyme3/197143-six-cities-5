import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createApi} from "./services/api";
import {fetchOffersList} from "./store/api-actions";
import rootReducer from "./store/reducers/root-reducer";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const api = createApi();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([store.dispatch(fetchOffersList())])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
            offers={offers}
            reviews={reviews}
          />
        </Provider>,
        document.querySelector(`#root`)
    );
  });

