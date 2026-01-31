import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import vansReducer from "./vansSlice.js";

const vansPersistConfig = {
    key: 'vans',
    storage,
    whitelist: ['favorites'], // Зберігаємо лише це поле
};

const persistedVansReducer = persistReducer(vansPersistConfig, vansReducer);

export const store = configureStore({
    reducer: {
        vans: persistedVansReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);