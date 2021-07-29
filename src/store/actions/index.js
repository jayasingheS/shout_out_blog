import {GETTING_A_RESOURCE_BY_ID,LISTING_ALL_RESOURCES} from '../actionTypes'
import libraryApi from "../../services/Api/blogApi";


export function getAllPost(length) {
    return async function (dispatch) {
        const response = await libraryApi.get("posts",{
            params: {
                _limit: length
            }
        });
        dispatch( { type: LISTING_ALL_RESOURCES, response });
    };
};




