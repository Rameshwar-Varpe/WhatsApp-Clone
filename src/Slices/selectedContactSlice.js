import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    selectedContact: {}
}

const selectedContactSlice = createSlice({
    name: 'selectedContact',
    initialState,
    reducers: {
        setSelectedContact: (state, action) => {
            state.selectedContact = action.payload
            // console.log("selectedContact", current(state))
        }
    }
})

export const { setSelectedContact } = selectedContactSlice.actions;

export default selectedContactSlice.reducer;