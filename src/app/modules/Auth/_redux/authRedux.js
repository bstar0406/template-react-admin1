import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
// import { getUserByToken } from "./authCrud";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API"
};

const initialAuthState = {
  user: undefined,
  authToken: undefined
};

export const reducer = persistReducer(
  { storage, key: "v711-demo1-auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken, user } = action.payload;
        console.log(action.payload)
        return { authToken, user: user };
      }

      case actionTypes.Register: {
        const { authToken, user } = action.payload;

        return { authToken, user: user };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken, user) => ({ type: actionTypes.Login, payload: { authToken, user } }),
  register: (authToken, user) => ({
    type: actionTypes.Register,
    payload: { authToken, user }
  }),
  logout: () => ({ type: actionTypes.Logout }),
  // requestUser: user => ({ type: actionTypes.UserRequested, payload: { user } }),
  // fulfillUser: user => ({ type: actionTypes.UserLoaded, payload: { user } })
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
  //   const { data: user } = yield getUserByToken();

  //   yield put(actions.fulfillUser(user));
  // });
}
