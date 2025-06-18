import { configureStore } from "@reduxjs/toolkit";
import issueReducer from './issueSlice';

const appStore = configureStore(
    {
        reducer:{
            issue:issueReducer
        }
    }
)
export default appStore;