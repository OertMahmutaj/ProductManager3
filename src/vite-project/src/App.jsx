import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Main/>} path="/people/" />
            <Route element={<Details/>} path="/people/:id" /> 
            <Route element={<Update/>} path="/people/edit/:id"/>   
        </Routes>
      </BrowserRouter>                           
    </div>
  );
}
export default App;

