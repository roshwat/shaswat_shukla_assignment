import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from './AuthContext';

export function Login(props){

    const [state,setState] = React.useState({
        username:undefined,
        password:undefined
    })
    const [faliedLogin ,setFailedLogin] = React.useState(false)
    const auth = React.useContext(AuthContext);
    const history = useHistory();
    const handleLogin = () =>{
        // console.log(state,props)
        if(state.username === 'foo' && state.password === 'bar') {
            // console.log(auth)
            auth.setAuth({username:state.username},true);
            setFailedLogin(false)
            history.push('/home')
           
        }
        else{
            setFailedLogin(true);
        }
    }
    console.log(props,history)
    return(
        <div style={{backgroundColor:'white',color:'black',display:'flex',flexDirection:'column'}}>
            <input type="text" placeholder="Enter Username" onChange={(e)=>{
                setState(prevState=>({
                    ...prevState,
                    username:e.target.value
                }))
            }}/>
            <input type="password" placeholder="Enter Password" onChange={(e)=>{
                setState(prevState=>({
                    ...prevState,
                    password:e.target.value
                }))
            }}/>
            <button type="submit" onClick={()=>{
                handleLogin();
            }}>Login</button>
        {faliedLogin && <div> Invalid Credentials</div>}
        </div>
    )
}