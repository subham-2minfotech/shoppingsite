import { combineReducers, createStore } from "redux";
import LoggedReducer from "./loginReducer/loginReducer";
import CategoryReducer from "./categoryReducer/categoryReducer";

const allReducers = combineReducers({
  isLogged: LoggedReducer,
  category: CategoryReducer,
})

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;