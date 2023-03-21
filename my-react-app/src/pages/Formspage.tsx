import React, { FC } from 'react';

const addFormsPage: FC = () => {
  return (
    <form className="form-conteiner">
      <label htmlFor="name">
        Name:
        <input type="text" name="name" />
      </label>
      <label htmlFor="surname">
        Surname:
        <input type="text" name="surname" />
      </label>
      <label htmlFor="birthday">
        Birthday:
        <input type="date" name="birthday" />
      </label>
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
      <label htmlFor="birthpersonalData">
        <input type="checkbox" name="birthpersonalData" />I consent to my personal data
        <label htmlFor="newsletter">
          <input type="checkbox" name="newsletter" />
          Subscribe to the newsletter
        </label>
      </label>
    </form>
  );
};

export default addFormsPage;
