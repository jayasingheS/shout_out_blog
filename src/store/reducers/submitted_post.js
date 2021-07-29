import {CREATING_A_RESOURCE} from '../actionTypes';

const initialState = {
    new_post:null,
};

export default (state=initialState,action)=> {
    switch (action.type) {
        case CREATING_A_RESOURCE :
            return{
                new_post: action.response.data,
            };
        default:
            return state;
    }
}


