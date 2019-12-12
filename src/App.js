import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
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
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </main>
    </div>
  )
}

export default App
