import {combineReducers} from "redux";
import errors from "./errors";
import post from "./blog_post";
const rootReducers = combineReducers({
    errors,
    post,
});

export default rootReducers;
