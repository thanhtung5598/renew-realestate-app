import { configureStore } from "@reduxjs/toolkit";
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { batchedSubscribe } from "redux-batched-subscribe";

// App Example
import sampleReducer from "./sample/reducer";

const reducer = {
  sample: sampleReducer,
};

const debounceNotify = debounce((notify: () => void) => notify());

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [batchedSubscribe(debounceNotify)],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
