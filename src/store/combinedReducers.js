import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";

import { changeLoginForm, loggedInUser } from "./login/loginReducers";
import { changeRegistrationForm } from "./registration/registrationReducers";
import { changeGameData, searchGameData } from "./games/gamesReducers";
import { myProfileLoad } from "./profile/profileReducers";
import { changeUserProfile } from "./profile/profileReducers";
import { showNotification } from "./notifications/notificationReducers";

const persistConfig = {
  key: "user",
  whitelist: ["loggedInUser", "changeGameData", "changeUserProfile", "i18nState"],
  storage,
};

const rootReducer = combineReducers({
  loggedInUser,
  changeUserProfile,
  changeLoginForm,
  changeRegistrationForm,
  showNotification,
  myProfileLoad,
  changeGameData,
  searchGameData,
  i18nState
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };
