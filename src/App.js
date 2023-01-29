import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router> 
      <HomePage/>
    </>
  );
}

export default App;
