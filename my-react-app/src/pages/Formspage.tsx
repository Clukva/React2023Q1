/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import '../styles/forms.css';
import MyForm from '../components/MyForm';

const addFormsPage: FC = () => {
  return (
    <div>
      <h1>Add form</h1>
      <MyForm />
    </div>
  );
};

export default addFormsPage;
