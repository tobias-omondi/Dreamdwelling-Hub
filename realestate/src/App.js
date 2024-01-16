import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Companies from './components/Companies';
import Agents from './components/Agents';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <Router>
       <Navbar />
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/About us' element = {<About/>}/>
          <Route path='/Companies' element = {<Companies/>}/>
          <Route path='/Agent' element = {<Agents/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Signup' element = {<Signup/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;
