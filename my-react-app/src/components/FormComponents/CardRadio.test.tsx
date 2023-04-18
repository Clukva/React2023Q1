import React from 'react';
import { render } from '@testing-library/react';
import FormRadioSelect from './CardRadio';

describe('formRadioSelect', () => {
  it('be names in document', () => {
    const forms = render(
      <FormRadioSelect func={() => {}} refq={null} refM={null} refF={null} refE={null} />
    );

    const nameInp = forms.getByText('Male');
    expect(nameInp).toBeInTheDocument();
    const nameInpu = forms.getByText('Female');
    expect(nameInpu).toBeInTheDocument();
    const nameInput = forms.getByText('Another');
    expect(nameInput).toBeInTheDocument();
  });
});
