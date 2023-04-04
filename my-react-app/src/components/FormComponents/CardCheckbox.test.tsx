import React from 'react';
import { render } from '@testing-library/react';
import FormCheckbpoxSelect from './CardCheckbox';

describe('FormCheckbpoxSelect', () => {
  it('be name in document', () => {
    const forms = render(
      <FormCheckbpoxSelect
        func={() => {}}
        refe={null}
        funcCk={() => {}}
        refCk={null}
        refError={null}
      />
    );

    const nameInp = forms.getByText('Consent to my personal data');
    expect(nameInp).toBeInTheDocument();
  });
});
