import {GETTING_A_RESOURCE_BY_ID,LISTING_ALL_RESOURCES} from '../actionTypes'
import libraryApi from "../../services/Api/blogApi";
import history from "../../history";

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
export function getOnePost(id,historyPush) {
    return async function (dispatch) {
        const response = await libraryApi.get(`posts/${id}`);
        dispatch( { type: GETTING_A_RESOURCE_BY_ID, response });
        if(response.status==200 && historyPush){
            history.push(`/Post/${response.data.id}`)
        }
    };
};




