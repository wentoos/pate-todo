import { combineReducers } from 'redux'
let todos = [
    {title:'这是第一条',work:false,id :1},
    {title:'这是第二条',work:true,id:2},
    {title:'这是第三条',work:true,id:3}
]

function workReducer(state = todos,action){
    let i = action.ind
    switch (action.type) {
        case 'TITLE':
            return [...state,{title:action.value,work:false,id:Date.now()}]
        case 'WORK':
            return [...state.slice(0,i), { ...state[i],work:!state[i].work } , ...state.slice(i+1,state.length)]
        default:
            return state
    }
}
let show = true
function showReducer(state = show ,action){

    switch (action.type) {
        case 'SHOW':
            return false
        case 'ALL' :
            return true
        default:
            return state
    }
}
const rootReducer = combineReducers({
    todos:workReducer,
    show:showReducer
})

export default rootReducer
