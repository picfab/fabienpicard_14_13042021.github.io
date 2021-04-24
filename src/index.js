import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './sass/main.scss'
import Spinner from './Components/Spinner'

const App = lazy(() => import('./App'))
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
