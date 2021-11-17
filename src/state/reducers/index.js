import {combineReducers} from "redux";
import imageReducer from './imageReducer';
import deviceViewReducer from "./deviceViewReducer";
import imageTypeReducer from "./imageTypeReducer";

const reducers = combineReducers({
  image: imageReducer,
  device: deviceViewReducer,
  imageType: imageTypeReducer
});

export default reducers;
