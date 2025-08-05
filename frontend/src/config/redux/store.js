import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import postReducer from "./reducer/postReducer";



// steps for state management
// 1.submit action
//handle action in its reducer
// register here kisko -> reducer

export const store = configureStore({
    reducer: {
        // reducers
        auth: authReducer,
        post: postReducer
    }

})
