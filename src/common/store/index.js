import { createStore, combineReducers } from "redux";
import trelloListReducer from "../../containers/TrelloLIst/reducer";

const rootReducer = combineReducers({
    trelloList: trelloListReducer,
});

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);