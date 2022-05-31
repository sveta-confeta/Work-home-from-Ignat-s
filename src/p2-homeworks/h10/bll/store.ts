import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

export const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export const store = createStore(reducers)


export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
