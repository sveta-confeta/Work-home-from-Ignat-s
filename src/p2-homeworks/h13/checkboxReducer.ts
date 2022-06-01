import {Dispatch} from "redux";
import {RequestsAPI} from "./api";
import {loadingAC} from "../h10/bll/loadingReducer";

export const initState = {
    checkbox: false,
    text: '',
};


export type StateType = {
    checkbox: boolean,
    text: string,
}

type ActionType = ReturnType<typeof CheckboxValueAC>
    | ReturnType<typeof TextValueAC>
    | ReturnType<typeof loadingAC>

export const checkboxReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'CHECKBOX-VALUE': {
            return {...state, checkbox: action.value}
        }
        case 'TEXT-VALUE': {
            return {...state, text: action.value}
        }
        default:
            return state;
    }
};

export const CheckboxValueAC = (value: boolean) => {
    return {
        type: 'CHECKBOX-VALUE',
        value,
    } as const

}
export const TextValueAC = (value: string) => {
    return {
        type: 'TEXT-VALUE',
        value,
    } as const

}

export const postValueThunkCreator = (value: boolean) => (dispatch: Dispatch) => {
    dispatch(loadingAC(true));
    RequestsAPI.createValueCheckbox(value)
        .then((res) => {
            dispatch(loadingAC(false));
            const text = res.data.errorText
            dispatch(TextValueAC(text));


        })
        .catch(err => {
            dispatch(loadingAC(false));
            const text = err.response.data.errorText
            dispatch(TextValueAC(text));
        })

}