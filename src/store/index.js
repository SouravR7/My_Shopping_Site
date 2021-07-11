import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import RootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage: storage,
    whiteList: ['persisted'],
    blacklist: ['onBoarding']
};


/**
 * Persist reducer
 */
const persistedReducer = persistReducer(persistConfig, RootReducer);


export const store = createStore(persistedReducer);
export const persistor = persistStore(store);