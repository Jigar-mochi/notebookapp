import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from '../components/navbar';
import Home from '../pages/home';
import Signup from '../pages/signup';
import Login from '../pages/login';
import SuccRegisterSuccess from '../pages/signup-Success';
import Textedit from '../pages/textEdit';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="textedit" element={<Textedit heading="Edit your text here" />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="succ" element={<SuccRegisterSuccess />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes