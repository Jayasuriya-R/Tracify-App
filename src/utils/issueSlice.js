import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const issueSlice = createSlice({
    name: 'issue',
    initialState: {
        issues: [],
    },
    reducers:{
        addIssue : (state, action) => {
            state.issues.push(action.payload);
        },
    }
})
    
export const { addIssue } = issueSlice.actions;
export default issueSlice.reducer;
