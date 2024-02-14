import { combineReducers } from "redux";

import authReducer from "./auth";
import botReducer from "./bot";
import socketReducer from "./socket";

const reducer = combineReducers({
  auth: authReducer,
  bot: botReducer,
  socket: socketReducer
});

export default reducer;
