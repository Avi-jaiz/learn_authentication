import '../Profile/profile.css'

const Profile =()=>
{
    return(
<form>
<label htmlFor="new-password" className='changePassword'>
    New Password 
</label>

<input type='password' id='new-password' />

<div>
    <button className='btn_action'>Change Password</button>
</div>

</form>


    )
}

export default Profile;