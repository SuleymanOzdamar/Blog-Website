import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components//contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
