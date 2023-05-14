import React from 'react'
import DashBoard from './component/DashBoard'
import { Provider } from 'react-redux'
import store from './store'
import DialogBox from './component/DialogBox/DialogBox'

function App() {
 

  return (
    <>
    <Provider store={store}>
      <div>
        <DashBoard/>
       <DialogBox/>
      </div>
      </Provider>
    
    </>
  )
}

export default App
