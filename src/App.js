import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components//contact';
import Post from './components/Post';
import Back from './components/Back';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Back className="back"/>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/post/:post_id' element={ <Post /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
