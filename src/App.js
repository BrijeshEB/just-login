import React, { useState } from 'react'
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import {Route, Switch ,Redirect, useHistory} from 'react-router-dom';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  const adminUser = {
    email: 'ab@eb.in',
    password: '12345'
  }
  
  const [user, setUser] = useState({name: '',email:''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log('Welcome!!');
      setUser({
        // name: details.name,
        email: details.mail
      })
      localStorage.setItem('validUser', 'ok');
    }else{
      console.log('bbyy!!');
      setError('Details Did Not Match!')
    }

  }

//  const Logout = () => {
//     console.log('Logout!')
//     setUser({name:'',email:''});
//   }

  return (
    <div className="App">
      {/* {(user.email !== "" ) ? ( */}
      {( localStorage.getItem('validUser') == 'ok' ) ? (
        <div className="welcome">
        <Header/>
        <Switch>
          <Route path='/login' component={Dashboard} />
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </div> 
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
