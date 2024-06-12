import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComplaint from './components/AddComplaint';

function App() {
  return (
    <div >
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddComplaint/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
