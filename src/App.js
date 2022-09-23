import { Redirect, Route ,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import ProfileForm from './Components/Profile/UserProfile';
import { useContext } from 'react';
import AuthContext from './Store/auth-context';






function App() {

  const authContext  =useContext(AuthContext);

  
  return (
    <div className="App">

      <Layout>
        <Switch>
<Route path='/' exact>
  <HomePage /> 

  </Route>
{!authContext.isLogged&& 
<Route path='/auth'>
  <AuthPage />
</Route>}
 

{authContext.isLogged&&
  <Route path='/profile'>
  <UserProfile />
</Route>}
<Route path='*'>
<Redirect to='/auth'/>
</Route>


        </Switch>
      
      </Layout>
    </div>
  );
}

export default App;
