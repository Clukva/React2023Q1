import { ChangeEventHandler, LegacyRef } from 'react';

export default function formTypeSelect(
  country: string,
  func: ChangeEventHandler<HTMLSelectElement> | undefined,
  ref: LegacyRef<HTMLParagraphElement> | undefined
) {
  return (
    <>
      <label className="input-name" htmlFor="country">
        Country:
        <select name="country" value={country} onChange={func}>
          <option value="Choose country" defaultValue="Choose country">
            Choose country
          </option>
          <option value="Belarus">Belarus</option>
          <option value="Litunia">Litunia</option>
          <option value="Latvia">Latvia</option>
          <option value="Poland">Poland</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Russia">Russia</option>
          <option value="Another country">Another country</option>
        </select>
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={ref}>
        Please write country correctly
      </p>
    </>
  );
}
