import { createSlice } from "@reduxjs/toolkit";

let chatSlice = createSlice({
    name:'chat',
    initialState: {
        message : []
    },
    reducers : {
        addMessage : (state , action) =>{
            state.message.splice(15,1)
            state.message.push(action.payload)
        }
    }
})

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;