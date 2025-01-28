import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Home from '../pages/home';
import '@fontsource/kumbh-sans';
import Footer from '../components/footer/footer';
import Services from '../pages/services';
import Projects from '../pages/projects';
import Projectdetails from '../pages/projectdetails';
import Aboutus from '../pages/aboutus';

function Myrouts() {
    return (
        <Router
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="projects" element={<Projects />} />
                <Route path="/projects/:category" element={<Projects />} />
                <Route path="projects/projectdetails/:projectType/:projectId" element={<Projectdetails />} />
                <Route path="aboutus" element={<Aboutus />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Myrouts;
