// import { useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

export default function Routes(props) {
  const { home, employees} = props.urls
  return <Router>
    <Switch>
      <Route exact path="/employees" children={employees} />
      <Route exact path="/" children={home} />
    </Switch>
  </Router>
}
