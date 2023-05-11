import React from 'react'
import DashBoard from './component/DashBoard'
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './component/header/Navbar'

function App() {
 

  return (
    <>
    <Provider store={store}>
      <div>
        <DashBoard/>
        
      </div>
      </Provider>
    
    </>
  )
}

export default App
