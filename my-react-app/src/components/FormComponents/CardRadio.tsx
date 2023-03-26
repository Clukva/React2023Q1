import { ChangeEventHandler, LegacyRef } from 'react';

export default function formTypeRadio(
  func: ChangeEventHandler<HTMLInputElement> | undefined,
  ref: LegacyRef<HTMLInputElement> | undefined,
  refM: LegacyRef<HTMLInputElement> | undefined,
  refF: LegacyRef<HTMLInputElement> | undefined,
  refE: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <>
      <p className="input-gender">
        Gender:
        <label htmlFor="myGender">
          <input type="radio" name="myGender" value="Male" onChange={func} ref={ref} />
          Male
        </label>
        <label htmlFor="myGender">
          <input type="radio" name="myGender" value="Female" onChange={func} ref={refM} />
          Female
        </label>
        <label htmlFor="myGender">
          <input type="radio" name="myGender" value="Another" onChange={func} ref={refF} />
          Another
        </label>
      </p>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refE}>
        Please choose gender
      </p>
    </>
  );
}
