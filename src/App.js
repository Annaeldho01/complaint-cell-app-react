import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComplaint from './components/AddComplaint';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddComplaint/>}/>
      <Route path='/view' element={<ViewAll/>}/>
     
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
