import React from 'react'

import store from './redux/store'
class TodoList extends React.Component{
    constructor(){
        super()
        this.bandleAll=this.bandleAll.bind(this)
        this.bandleCompleted=this.bandleCompleted.bind(this)
    }
    bandleCompleted(){
        store.dispatch({type:'SHOW'})
    }
    bandleAll(){
        store.dispatch({type:'ALL'})
    }
    render(){
        return(
            <div className='actions clearfix'>
                <div onClick={this.bandleAll}>
                    <svg className="icon"  viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#00bcd4" d="M340.727595 455.212067l-113.575865 0 0-113.575865 113.575865 0 0 113.575865zM1137.575865 0l0 1024-1137.575865 0 0-1024 1137.575865 0zM454.303461 284.393966l-340.727595 0 0 455.212067 113.575865 0 0-170.818101 113.575865 0 0 170.818101 113.575865 0 0-455.212067zM738.697427 682.363798l-113.575865 0 0-397.969831-113.575865 0 0 455.212067 227.15173 0 0-57.242236zM1023.091393 682.363798l-113.575865 0 0-397.969831-113.575865 0 0 455.212067 227.15173 0 0-57.242236z" />
                    </svg>
                </div>
                <div onClick={this.bandleCompleted}>
                    <svg className="icon" viewBox="0 0 1538 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ff6c9f" d="M1507.664 215.466l-810.624 820.736c-39.488 40-103.552 40-143.040 0l-524.48-531.072c-39.552-40-39.552-104.832 0-144.832 39.488-40 103.488-40 143.040 0l452.928 458.624 739.072-748.288c39.552-40 103.552-40 143.104 0 39.488 40 39.488 104.832 0 144.832z" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default TodoList
