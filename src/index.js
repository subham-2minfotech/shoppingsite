import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// import React from 'react';
// import { createStore } from "redux";
// import { Provider, connect } from "react-redux";
// import ReactDOM from 'react-dom';

// const countReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     count: state
//   };
// };

// let store = createStore(countReducer)

// const Component = ({ count, handleIncrementClick, handleDecrementClick }) => (
//   <div>
//     <h1>Hello form React & Redux!!! {count}</h1>
//     <button onClick={handleIncrementClick}>Increment</button>
//     <button onClick={handleDecrementClick}>Decrement</button>
//   </div>
// )

// const mapDispatchToProps = dispatch => {
//   return {
//     handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
//     handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
//   };
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

// const App = () => (
//   <Provider store={store}>
//     <Container />
//   </Provider>
// );

// ReactDOM.render(<App />, document.getElementById('root'))