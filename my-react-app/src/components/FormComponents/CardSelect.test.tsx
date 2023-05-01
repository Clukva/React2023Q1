import React from 'react';
import { render } from '@testing-library/react';
import FormTypeSelect from './CardSelect';

describe('formTypeSelect', () => {
  it('be name and surname input fields', () => {
    const forms = render(<FormTypeSelect country="name" func={() => {}} refSel={null} />);

    const nameInp = forms.getByText('Country:');
    expect(nameInp).toBeInTheDocument();
  });
});
