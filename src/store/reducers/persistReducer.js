import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "csgomarketx",
  storage,
  whitelist: ["auth","bot", "socket"],
};

const persist = (reducers) => persistReducer(persistConfig, reducers);

export default persist;
