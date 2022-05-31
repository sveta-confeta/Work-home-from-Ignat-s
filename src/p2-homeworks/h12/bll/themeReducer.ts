export const initState = {
    color:'dark',
};


export type StateType={
    color:string
}

type ActionType=ReturnType<typeof DifferentColorAC>

export const themeReducer = (state = initState, action:ActionType): StateType=> {
    switch (action.type) {
        case "COLOR": {
            return {...state,color:action.value}
        }
        default:
            return state;
    }
};

export const DifferentColorAC=(value:string)=>{
    return {
        type :'COLOR',
        value,
    } as const

}

export const changeThemeC = (): any => {}; // fix any