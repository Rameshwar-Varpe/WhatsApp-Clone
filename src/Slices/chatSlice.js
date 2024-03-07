import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  chats: [
        {
            id: '7',
            content: "Good Night",
            time: '08:56',
            date: '05/03/2024',
            mobile: '9324102653',
            deliveredStatus: 'true',
            readStatus: 'true'
        },
        {
            id: '1',
            content: "Hiii!!! Whats going on aa😃",
            time: '13:24',
            date: '02/03/2024',
            mobile: '9422063173',
            deliveredStatus: 'true',
            readStatus: 'true'
        },
        {
            id: '2',
            content: "Good morning...",
            time: '13:24',
            date: '02/03/2024',
            mobile: '7218724953',
            deliveredStatus: 'true',
            readStatus: 'true'
        },
        {
            id: '3',
            content: "How was the dinner",
            time: '15:26',
            date: '01/03/2024',
            mobile: '9579599178',
            deliveredStatus: 'true',
            readStatus: 'true'
        },
        {
            id: '4',
            content: "This is to inform you all that MCA",
            time: '15:26',
            date: '29/02/2024',
            mobile: '7843039075',
            deliveredStatus: 'true',
            readStatus: 'true'
        },
        {
            id: '5',
            content: "Call karjo ratri.",
            time: '16:26',
            date: '25/01/2024',
            mobile: '8483005153',
            deliveredStatus: 'true',
            readStatus: 'true'
        },
        {
            id: '6',
            content: "Okk will check then",
            time: '16:26',
            date: '01/01/2024',
            mobile: '9322755952',
            deliveredStatus: 'true',
            readStatus: 'true'
        }
    ]
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChat: (state, action) => {
            state.chats = action.payload;
        }
    }
})

export const { setChat } = chatSlice.actions;

export default chatSlice.reducer;