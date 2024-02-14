import { createSlice } from "@reduxjs/toolkit";

const initialData = [];

const initialState = {
    bots: initialData,
};

const bot = createSlice({
    name: "bot",
    initialState,
    reducers: {
        setBot(state, action) {
            state.bots = action.payload;
        },
        updateBot(state, action) {
            let data = [...state.bots];
            data.push(action.payload);
            state.bots = data;
        },
        updateBotData(state, action) {
            let data = action.payload;
            const newData = state.bots.map(item => {
                if(item.botSteamID !== data.botSteamID){
                    return item
                } else {
                    return {
                        ...item,
                        data: data.data,
                        socketKey: data.socketKey
                    }
                }
            })

            state.bots = newData;
        },
        removeBot(state, action) {
            let data = [...state.bots];
            const newData = data.filter(item => item.socketKey !== action.payload);
            state.bots = newData;
        },
        removeBotAll(state, action) {
            state.bots = initialData;
            state = { ...state };
        },
    },
});

export default bot.reducer;

export const {
    setBot,
    updateBot,
    updateBotData,
    removeBot,
    removeBotAll,
} = bot.actions;
