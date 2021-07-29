import {combineReducers} from "redux";
import errors from "./errors";
import post from "./blog_post";
import post_id from "./post";
import new_post from './submitted_post';
const rootReducers = combineReducers({
    errors,
    post,
    post_id,
    new_post
});

export default rootReducers;
