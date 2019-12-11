import React from "react"
import { Route, Link } from "react-router-dom"
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
        {route.map(({ name, path, Component }) => (
          <Route key={name} path={path} exact component={Component} />
        ))}
      </main>
    </div>
  )
}

export default App
