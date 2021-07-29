import {LISTING_ALL_RESOURCES} from '../actionTypes';

const initialState = {
    post:null,
};

export default (state=initialState,action)=> {
    switch (action.type) {
        case LISTING_ALL_RESOURCES :
            return{
                post: action.response.data,
            };
        default:
            return state;
    }
}


