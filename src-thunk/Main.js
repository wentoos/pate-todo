import React from 'react'
import { connect } from 'react-redux'
import { searchGit } from './action'
import axios from 'axios'
class Main extends React.Component {
    componentDidMount(){
        this.props.dispatch(searchGit())
    }
    render(){
        console.log(this.props);
        return(
            <div>aaaa</div>

        )
    }
}
let mapStateToProps = state => ({
    root:state
})
export default connect(mapStateToProps)(Main)
