import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createApi} from "./services/api";
import {fetchOffersList, checkAuth} from "./store/api-actions";
import rootReducer from "./store/reducers/root-reducer";
import {AuthorizationStatus} from "./const";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";
import {setAuthorizationStatus} from "./store/actions";
import {redirect} from "./store/middlewares/redirect";

const api = createApi(() => store.dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH)));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api), redirect)
    )
);

Promise.all([store.dispatch(fetchOffersList()), store.dispatch(checkAuth())])
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

