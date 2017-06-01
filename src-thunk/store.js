import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
let root='aaa'

function rootReducer (state = root,action){
    
    switch (action.type) {
        case 'VALUE':
            return action.value
        default: state
    }
}


let store = createStore(rootReducer,applyMiddleware(thunk))
export default store
