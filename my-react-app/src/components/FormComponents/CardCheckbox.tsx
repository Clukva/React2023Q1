import { ChangeEventHandler, LegacyRef } from 'react';

export default function formTypeCheckbox(
  func: ChangeEventHandler<HTMLInputElement> | undefined,
  ref: LegacyRef<HTMLInputElement> | undefined,
  funcCk: ChangeEventHandler<HTMLInputElement> | undefined,
  refCk: LegacyRef<HTMLInputElement> | undefined,
  refError: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <>
      <label htmlFor="birthpersonalData">
        <input
          type="checkbox"
          name="birthpersonalData"
          value="consent to my personal data"
          onChange={func}
          ref={ref}
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
}
