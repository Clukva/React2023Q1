import React from 'react';
import { render } from '@testing-library/react';
import FormImageSelect from './CardImage';

describe('formRadioSelect', () => {
  it('be name in document', () => {
    const forms = render(<FormImageSelect func={() => {}} refW={null} refM={null} refF={null} />);

    const nameInp = forms.getByText('My Image:');
    expect(nameInp).toBeInTheDocument();
  });
});
