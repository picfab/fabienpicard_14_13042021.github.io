import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import Home from './views/Home'
import Employees from './views/Employees'

/**
 * The application component
 * @module App
 * @component
 */
export default function App() {
  return (
    <Provider store={store}>
      <Routes
        urls={{
          home: <Home />,
          employees: <Employees />,
        }}
      />
    </Provider>
  )
}
