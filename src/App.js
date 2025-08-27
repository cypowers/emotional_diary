import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/diary' element={<Diary />} />
      </Routes>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/diary">Diary</Link>
      </div>
    </div>
    
  );
}

export default App;
