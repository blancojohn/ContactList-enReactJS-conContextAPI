import React from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';

const App = () => {
    return (
        <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Contact />} />
                    </Routes>
                </BrowserRouter>
        </>
    )
}

export default injectContext(App);