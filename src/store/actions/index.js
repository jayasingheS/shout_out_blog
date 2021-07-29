import {GETTING_A_RESOURCE_BY_ID,LISTING_ALL_RESOURCES,CREATING_A_RESOURCE} from '../actionTypes'
import postApi from "../../services/Api/blogApi";
import history from "../../history";

export function getAllPost(length) {
    return async function (dispatch) {
        const response = await postApi.get("posts",{
            params: {
                _limit: length
            }
        });
        dispatch( { type: LISTING_ALL_RESOURCES, response });
    };
};
export function getOnePost(id,historyPush) {
    return async function (dispatch) {
        const response = await postApi.get(`posts/${id}`);
        dispatch( { type: GETTING_A_RESOURCE_BY_ID, response });
        if(response.status==200 && historyPush){
            history.push(`/Post/${response.data.id}`)
        }
    };
};



export function PostSubmit(payload) {
    return async function (dispatch) {
        const title = await payload.title;
        const body =await payload.description;
        const userId =await parseInt(payload.id);
        const response = await postApi.post("/posts",{ title,body,userId});
        dispatch( { type: CREATING_A_RESOURCE, response });
        if(response.status==201){
            history.push("/")
        }
    };
};
