import { ActionType, StateType } from "typesafe-actions";
import { createStore } from "redux";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import * as actions from "./actions";
import reducer from "./reducer";

export type RootAction = ActionType<typeof actions>;
export type RootState = StateType<typeof reducer>;

const persistConfig: PersistConfig = {
  version: 1,
  key: "root-v2",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
