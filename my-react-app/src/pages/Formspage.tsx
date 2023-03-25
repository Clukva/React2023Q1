/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import '../styles/forms.css';
import MyForm from '../components/MyForm';

const addFormsPage: FC = () => {
  return (
    <div>
      <h3 className="form-title">Add form</h3>
      <MyForm />
    </div>
  );
};

export default addFormsPage;
