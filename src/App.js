import { Route ,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import ProfileForm from './Components/Profile/UserProfile';





function App() {
  return (
    <div className="App">

      <Layout>
        <Switch>
<Route path='/' exact>
  <HomePage /> 

</Route>
<Route path='/auth'>
  <AuthPage />
</Route>

<Route path='/profile'>
  <UserProfile />
</Route>

        </Switch>
      
      </Layout>
    </div>
  );
}

export default App;
