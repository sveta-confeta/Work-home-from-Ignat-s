import {UserType} from "../HW8";

 export type ActionType=SortUpType | SortDownType | Sort18Type;

type SortUpType=ReturnType< typeof sortUpAC>
type SortDownType=ReturnType< typeof sortDownAC>
type Sort18Type=ReturnType< typeof sort18AC>

export const homeWorkReducer = (state: Array<UserType>, action:ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sortUp': {
            return  [...state].sort((a,b)=>{
                return a.name<b.name ? -1 :1
            })
        }
        case 'sortDown': {
            return  [...state].sort((a,b)=>{
                return a.name>b.name ? -1 :1
            })

        }
        case  'sort18':
            return state.filter(f=> f.age>=18)

        default: return state
    }
}
export const sortUpAC=()=>{
    return{
        type:'sortUp'
    } as const
}
export const sortDownAC=()=>{
    return{
        type:'sortDown'
    } as const
}
export const sort18AC=()=>{
    return{
        type:'sort18'
    } as const
}