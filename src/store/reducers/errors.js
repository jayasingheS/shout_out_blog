import {SET_CURRENT_USER,ADD_ERROR,REMOVE_ERROR} from '../actionTypes';

export default(state={message:null},action)=>{
    switch (action.type) {
        case ADD_ERROR:
            return{...state,message:action.payload.error};
        case REMOVE_ERROR:
            return {...state,message: null};
        default:
            return state;
    }
}
