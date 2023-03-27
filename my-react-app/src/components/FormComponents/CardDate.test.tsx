import React from 'react';
import { render } from '@testing-library/react';
import FormDateSelect from './CardDate';

describe('formDateSelect', () => {
  it('be name in document', () => {
    const forms = render(<FormDateSelect birthday="birthday" func={() => {}} refq={null} />);

    const nameInp = forms.getByText('Birthday:');
    expect(nameInp).toBeInTheDocument();
  });
});
