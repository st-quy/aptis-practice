import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Vocabulary } from './pages/Vocabulary';

function App() {
  return (
    <Routes>
    <Route path='/vocabulary' element = {<Vocabulary/>}/>
    </Routes>
  );
}

export default App;
