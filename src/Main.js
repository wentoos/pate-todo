import React from 'react'
import store from './redux/store'
import TodoList from './Todolist'
import Form from './Form'
import Actions from './Actions'
import { connect } from 'react-redux'
class Home extends React.Component {
    constructor() {
        super()

        this.bandleWork =this.bandleWork.bind(this)
    }

    bandleWork(){
        store.dispatch({type:'WORK'})

        let num=this.props.todos.map(
                (item,index)=>(
                    item.work? index : ''
                )
        )

        store.dispatch({type:'WORK',index:num})
    }
    render(){
        return (
            <div className='home-warp'>
                <h2>TODO</h2>
                <TodoList className='todolist'/>
                <div className='post-item'>
                    <div>
                        <Form className='form'/>
                        <Actions className='actions'/>
                    </div>
                </div>
            </div>
        )
    }
}
const myStateToProps = state => ({
    todos:state
})
export default connect (myStateToProps)(Home)
