import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

function configureStore(state = { rotating: true, text: 'Stop' }) {
  console.log('store',state);
  return createStore(rotateReducer,state);
}

export default configureStore;