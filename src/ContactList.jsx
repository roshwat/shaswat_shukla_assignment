import React, {useState,useEffect} from 'react';
import AuthContext from './AuthContext';
import userData from './userData';
import { useHistory } from 'react-router-dom';

export default function ContactList(props){

    const [userList, setUserList] = useState([]);
    const [count, setCount] = useState(6);
    const [loading, setLoading] = useState(false);
    const [allDone, setAlldone] = useState(false);
    const auth = React.useContext(AuthContext);
    const history = useHistory();
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if(count >= 50) {
                setAlldone(prevValue=>(
                    true
                ))
            }
          if(!allDone) {
            addUsers(count);
          }
        }
      }
    
      useEffect(() => {
        addUsers(count);
      }, []);
    
      const addUsers = (count) => {
        setLoading(true);
        setTimeout(() => {
            setCount(prevCount=>(
                count + 4
            ))
            setUserList(prevList=>(
               [...userData.data.slice(0,count)]
            ))
            setLoading(false)
        }
        ,1000);
      }
    return(
        <section>
            <button onClick={()=>{
                auth.setAuth({username:undefined},false);
                history.push('/home')
            }}> Logout </button>
            {
            userList.map((user,index)=>{
                return (
                    <div style={{
                        backgroundColor:'white',
                        minWidth:'250px',
                        minHeight:'70px',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'sapce-around',
                        alignItems:'center',
                        color:'black',
                        margin:'10px 10px',
                        padding:'10px 10px'}}
                        key={index}>
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="user_avatar" width="50px" height="50px" style={{margin:'5px 5px'}}/>
                        <h3>{user.name}</h3>
                    </div>
                )
            })
            }
            {loading ? <div>Loading ...</div> : "" }
            {allDone ? <div>All Done ...</div> : "" }
      </section>
    )
}