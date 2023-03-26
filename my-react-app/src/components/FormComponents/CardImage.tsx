import { ChangeEventHandler, LegacyRef } from 'react';

export default function formTypeImage(
  func: ChangeEventHandler<HTMLInputElement> | undefined,
  ref: LegacyRef<HTMLInputElement> | undefined,
  refM: LegacyRef<HTMLInputElement> | undefined,
  refF: LegacyRef<HTMLParagraphElement> | undefined
) {
  return (
    <>
      <label className="input-name" htmlFor="myImage">
        My Image:
        <input type="file" name="myImage" ref={ref} onChange={func} />
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refM}>
        Please choose image
      </p>
      <p className="data-information" style={{ opacity: 0 }} ref={refF}>
        Data has been saved !
      </p>
      <button className="form-submit" type="submit">
        Submit
      </button>
    </>
  );
}
