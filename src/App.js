import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Archives from './pages/Archives';
import Contact from './pages/Contact';
import Inscriptions from './pages/Inscriptions';
import Program from './pages/Program';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/archives" element={<Archives/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/inscriptions" element={<Inscriptions/>}/>
            <Route path="/programme" element={<Program/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default App;