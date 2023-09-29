import logo from './logo.svg';
import './App.css';
import { LandingPage } from './pages/landingpage/landing';
import { Signup } from './pages/signup/signup';
import { SignIn } from './pages/signin/signin';
import {  Router } from './router/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Router/>

      </header>
    </div>
  );
}

export default App;
