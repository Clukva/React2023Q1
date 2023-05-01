import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/Mainpage';
import AboutPage from './pages/Aboutpage';
import ErrorPage from './pages/Errorpage';
import FormsPage from './pages/Formspage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/forms" element={<FormsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
