import { combineReducers, createStore } from "redux";
import LoggedReducer from "./login&logout/reducer";
import CategoryReducer from "./category/reducer";
import CartReducer from "./cart/reducer";
import productIdReducer from "./productid/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['isLogged']
}

const rootReducers = combineReducers({
  isLogged: LoggedReducer,
  category: CategoryReducer,
  cart: CartReducer,
  productId: productIdReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  const persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
