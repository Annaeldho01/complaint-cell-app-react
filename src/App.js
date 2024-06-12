import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddComplaint from './components/AddComplaint';
import ViewAll from './components/ViewAll';
import SearchComplaint from './components/SearchComplaint';

function App() {
  return (
    <div >
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddComplaint/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      <Route path='/search' element={<SearchComplaint/>}/>
     
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
