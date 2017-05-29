 import React from 'react'
import Main from './Main'
import store from './redux/store'
import { Provider } from 'react-redux'
const App = ()=>(
    <Provider store={store}>
        <div className='app-warp'>
            <Main/>
        </div>
    </Provider>
)
export default App
