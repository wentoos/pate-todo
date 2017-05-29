import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'
class TodoList extends React.Component{
    constructor() {
        super()

    }
    bandleWork(e){
        let id = e.target.id
        console.log(this.props.todos);
        let ind = this.props.todos.findIndex(isBigEnough)
        function isBigEnough(item) {
            return item.id == id
        }
        console.log(ind);
        store.dispatch({type:'WORK',ind:ind})
    }
    render(){
        function isBigEnough(item){
            return item.work === true
        }
        let arr =this.props.todos.filter(isBigEnough)
            return(
                <div className='todolist'>
                    <div className="container">
                        <ul>
                            {   this.props.show?
                                this.props.todos.map( item =>
                                    <li className={item.work? 'completed' : ''}  key={item.id} id={item.id} onClick={this.bandleWork.bind(this)}>
                                        {item.title}
                                    </li>
                                ):arr.map( item =>
                                    <li className={item.work? 'completed' : ''}  key={item.id} id={item.id} onClick={this.bandleWork.bind(this)}>
                                        {item.title}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            )
    }
}
const myStateToProps = (state)=>({
    todos:state.todos,
    show:state.show
})
export default connect(myStateToProps)(TodoList)
