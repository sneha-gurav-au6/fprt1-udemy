import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../redux/reducer/rootReducer";
import thunk from "redux-thunk";

//redux thunk middleware to async api calls
// rootreducer = userreducer+ productreducer

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
