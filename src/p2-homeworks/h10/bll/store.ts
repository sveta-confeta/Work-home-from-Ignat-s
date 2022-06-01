import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {checkboxReducer} from "../../h13/checkboxReducer";
import thunk from "redux-thunk";

export const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    checkboxValue:checkboxReducer,
})

export const store = createStore(reducers,applyMiddleware(thunk))


export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
