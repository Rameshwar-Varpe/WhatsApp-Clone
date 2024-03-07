import { configureStore } from "@reduxjs/toolkit";
import selectedContactReducer from "../Slices/selectedContactSlice";
import chatReducer from '../Slices/chatSlice'
// import logger from 'redux-logger'

export default configureStore({
    reducer : {
      selectedContact : selectedContactReducer,
      chats : chatReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
})