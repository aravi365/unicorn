import { SUBMIT_SUCCESS } from './constants'

let initialState = {}
export default (state=initialState,action)=>{
    switch(action.type){
        case SUBMIT_SUCCESS:
            return action.payload
        default:
        return state
    }
}