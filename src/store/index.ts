import { createStore } from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionType, StateType } from "typesafe-actions";

import * as actions from "./actions";
import reducer from "./reducer";

export type RootAction = ActionType<typeof actions>;
export type RootState = StateType<typeof reducer>;

const persistConfig: PersistConfig = {
  key: "root-v2",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
