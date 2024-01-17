import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <header className="App_links">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/companies' element = {<Companies/>}/>
          <Route path='/agent' element = {<Agents/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
        </Routes>
      </header>
    </div>
    </Router>
  );
}
export default App;
