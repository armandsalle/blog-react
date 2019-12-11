import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { reducers } from "./shared/reducers"
import App from "./App"

const store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
