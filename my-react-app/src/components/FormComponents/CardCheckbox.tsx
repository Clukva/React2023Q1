import { ChangeEventHandler, LegacyRef } from 'react';

interface FormTypeCheckboxProps {
  func: ChangeEventHandler<HTMLInputElement> | undefined;
  refe: LegacyRef<HTMLInputElement> | undefined;
  funcCk: ChangeEventHandler<HTMLInputElement> | undefined;
  refCk: LegacyRef<HTMLInputElement> | undefined;
  refError: LegacyRef<HTMLInputElement> | undefined;
}

const formTypeCheckbox: React.FC<FormTypeCheckboxProps> = ({
  func,
  refe,
  funcCk,
  refCk,
  refError,
}) => {
  return (
    <>
      <label htmlFor="birthpersonalData">
        <input
          type="checkbox"
          name="birthpersonalData"
          value="consent to my personal data"
          onChange={func}
          ref={refe}
        />
        Consent to my personal data
      </label>
      <label htmlFor="newsletter">
        <input
          type="checkbox"
          name="newsletter"
          value="subscribe to the newsletter"
          onChange={funcCk}
          ref={refCk}
        />
        Subscribe to the newsletter (required field)
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refError}>
        Please choose checkbox
      </p>
    </>
  );
};

export default formTypeCheckbox;
