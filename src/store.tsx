import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer } from "./reducers";

const persistConfig = {
	timeout: 10000,
	key: 'root',
	storage: AsyncStorage,
	whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true
      },
    })
});

export type RootSate = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);
