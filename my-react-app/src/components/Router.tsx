import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import MainPage from '../pages/Mainpage';
import AboutPage from '../pages/Aboutpage';
import ErrorPage from '../pages/Errorpage';

const addRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default addRouter;
