import {GETTING_A_RESOURCE_BY_ID} from '../actionTypes';

const initialState = {
    post_ID:null,
};

export default (state=initialState,action)=> {
    switch (action.type) {
        case GETTING_A_RESOURCE_BY_ID :
            return{
                post_ID: action.response.data,
            };
        default:
            return state;
    }
}


