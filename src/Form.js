import React from 'react'
import store from './redux/store'
class Form extends React.Component{
    constructor(){
        super()
        this.bandleSubimt=this.bandleSubimt.bind(this)
    }
    bandleSubimt(e){
        e.preventDefault()
        let value= this.input.value
        if(value.length > 0){
            store.dispatch({type:'TITLE',value})
        }
    }
    render(){
            return (
                <form className='form clearfix' onClick={this.bandleSubimt}>
                    <input type='text' className='text' placeholder='请嘚瑟...' ref={ input => this.input = input}/>
                    <input type='submit' className='submit' value='+'/>
                </form>
        )
    }
}
export default Form
