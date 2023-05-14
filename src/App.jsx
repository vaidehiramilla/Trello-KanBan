import React from 'react'
import DashBoard from './component/DashBoard'
import { Provider } from 'react-redux'
import store from './store/store'
import { Route, Routes } from 'react-router'
import Description from './component/description/Description'

function App() {
 

  return (
    <>
    <Provider store={store}>
      <Routes>
       <Route path='/' element={<DashBoard/>} />
       <Route path='/task/:id/' element={<Description/>} />
        
      </Routes>
      </Provider>
    
    </>
  )
}

export default App
