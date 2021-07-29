import {combineReducers} from "redux";
import errors from "./errors";
import post from "./blog_post";
import post_id from "./post";
const rootReducers = combineReducers({
    errors,
    post,
    post_id
});

export default rootReducers;
