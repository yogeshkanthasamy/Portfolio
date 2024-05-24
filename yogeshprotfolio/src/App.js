import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/About/About';
import Project from './components/projects/Project';
import Navbar from './components/Navbar';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutme' element={<About/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
