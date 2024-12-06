import { createStore } from "redux";
import TasksReducer from "./TasksReducer";
const store = createStore(TasksReducer);
export default store;

