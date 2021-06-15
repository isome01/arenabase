import React from 'react'
import 'antd/dist/antd.css'
import {BrowserRouter} from 'react-router-dom'
import {Switch} from 'react-router'
import {routes} from './app/routes'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  )
}

export default App
