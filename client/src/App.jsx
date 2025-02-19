import React from 'react';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/editproduct/:id" element={<EditProduct />} />
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App

