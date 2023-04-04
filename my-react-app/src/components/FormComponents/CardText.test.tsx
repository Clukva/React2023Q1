import React from 'react';
import { render } from '@testing-library/react';
import FormTypeText from './CardText';

describe('formTypeText', () => {
  it('renders name and surname input fields', () => {
    const forms = render(
      <FormTypeText
        nameForm="name"
        func={() => {}}
        refName={null}
        surname="Surname"
        refSur={null}
      />
    );
    const nameInp = forms.getByText('Name:');
    expect(nameInp).toBeInTheDocument();
    const surnameInp = forms.getByText('Surname:');
    expect(surnameInp).toBeInTheDocument();
  });
});
