/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import '../styles/forms.css';
import MyForm from '../components/MyForm';

const addFormsPage: FC = () => {
  return (
    <>
      <form className="form-conteiner">
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="surname">
          Surname:
          <input type="text" name="surname" />
        </label>
        <hr />
        <label htmlFor="birthday">
          Birthday:
          <input type="date" name="birthday" />
        </label>
        <hr />
        <label htmlFor="country">
          Country:
          <select name="country">
            <option value="Belarus">Belarus</option>
            <option value="Litunia">Litunia</option>
            <option value="Latvia">Latvia</option>
            <option value="Poland">Poland</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Russia">Russia</option>
            <option value="Another country">Another country</option>
          </select>
        </label>
        <hr />
        <label htmlFor="birthpersonalData">
          <input type="checkbox" name="birthpersonalData" />I consent to my personal data
          <br />
          <label htmlFor="newsletter">
            <input type="checkbox" name="newsletter" />
            Subscribe to the newsletter
          </label>
        </label>
        <hr />
        <p>
          Gender:
          <label>
            <input type="radio" name="myGender" value="option1" />
            Male
          </label>
          <label>
            <input type="radio" name="myGender" value="option2" />
            Female
          </label>
          <label>
            <input type="radio" name="myGender" value="option3" />
            Another
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>My form</h1>
        <MyForm />
      </div>
    </>
  );
};

export default addFormsPage;
