import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import articleReducer from "./article/slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// config redux persist
export const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, articleReducer);

export const store = configureStore({
  reducer: {
    article: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
