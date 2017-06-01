import axios from 'axios'

function searchGit(){
    return dispatch => {
        axios.get(`https://api.github.com/users/wentoos`)
        .then(res=> dispatch({type:'VALUE',value:res.data}))
    }
}
export { searchGit }
