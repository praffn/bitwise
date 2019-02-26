import { ActionType, StateType } from "typesafe-actions";
import { createStore } from "redux";

import * as actions from "./actions";
import reducer from "./reducer";

export type RootAction = ActionType<typeof actions>;
export type RootState = StateType<typeof reducer>;

export const configureStore = () =>
  createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
