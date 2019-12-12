import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import route from "./routes"

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>
          <Link to="/">Simple React Blog</Link>
        </h1>
      </header>
      <main>
        <Switch>
          {route.map(({ name, path, Component }) => (
            <Route
              key={name}
              path={path}
              exact
              render={props => {
                return <Component {...props} />
              }}
            />
          ))}
        </Switch>
      </main>
    </div>
  )
}

export default App
