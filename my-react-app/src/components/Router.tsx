import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Mainpage';
import AboutPage from '../pages/Aboutpage';
import ErrorPage from '../pages/Errorpage';
import FormsPage from '../pages/Formspage';

const addRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/forms" element={<FormsPage />} />
    </Routes>
  );
};

export default addRouter;
