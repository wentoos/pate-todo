 import React from 'react'
import Main from './Main'
import store from './store.js'
import { Provider } from 'react-redux'
const App = ()=>(
    <Provider store={store}>
        <Main/>
    </Provider>
)
export default App
