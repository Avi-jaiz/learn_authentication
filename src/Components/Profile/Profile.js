import '../Profile/profile.css';
import { useRef ,useContext} from 'react';
import AuthContext from '../../Store/auth-context';
import { useHistory } from 'react-router-dom';

const Profile =()=>
{
const newPasswordInputRef =useRef();
const authContext = useContext(AuthContext)
const history = useHistory()

const submitHandler=(e)=>
{
        e.preventDefault();
  const enteredPassword= newPasswordInputRef.current.value;

  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBr-sIgUeHAxoVHHpfIiMX6nEFj5t51Bhc',{
    method:'POST',
    body:JSON.stringify({idToken:authContext.token,password:enteredPassword,returnSecureToken:false}),
    headers:{
        'Content-Type':'application/json'
    }
  }).then(res=>{
    
history.replace('/')

  });

}

    return(
<form onSubmit={submitHandler}>
<label htmlFor="new-password" className='changePassword'>
    New Password 
</label>

<input type='text' id='new-password' minLength={7} ref={newPasswordInputRef} />

<div>
    <button className='btn_action' >Change Password</button>
</div>

</form>


    )
}

export default Profile;