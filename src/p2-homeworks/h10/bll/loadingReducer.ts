export const initState = {
loading:false,
}

export type StateType={
    loading:boolean
}
type ActionType=ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType):StateType=> {
    switch (action.type) {
        case 'LOADING': {
            return {...state,loading:action.value}
        }
        default: return state
    }
}

export const loadingAC = (value:boolean) => {
    return {
        type :'LOADING',
        value,
    }

}