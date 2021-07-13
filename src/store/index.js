import { combineReducers, createStore } from "redux";
import LoggedReducer from "./login/reducer";
import CategoryReducer from "./category/reducer";
import CartReducer from "./cart/reducer";

const allReducers = combineReducers({
  isLogged: LoggedReducer,
  category: CategoryReducer,
  cart: CartReducer,
})

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;