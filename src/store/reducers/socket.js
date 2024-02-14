import { createSlice } from "@reduxjs/toolkit";

const initialData = {};

const initialState = {
    socket : initialData,
};

const socket = createSlice({
    name: "socket",
    initialState,
    reducers: {
        setSocket(state, action) {
            state.socket = action.payload;
        },
        removeSocket(state, action) {
            state.socket = initialData;
        },
    },
});

export default socket.reducer;

export const {
    setSocket,
    removeSocket,
} = socket.actions;
