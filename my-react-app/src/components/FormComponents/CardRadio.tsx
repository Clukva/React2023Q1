import { ChangeEventHandler, LegacyRef } from 'react';

interface FormTypeRadioProps {
  func: ChangeEventHandler<HTMLInputElement> | undefined;
  refq: LegacyRef<HTMLInputElement> | undefined;
  refM: LegacyRef<HTMLInputElement> | undefined;
  refF: LegacyRef<HTMLInputElement> | undefined;
  refE: LegacyRef<HTMLInputElement> | undefined;
}

const formTypeRadio: React.FC<FormTypeRadioProps> = ({ func, refq, refM, refF, refE }) => {
  return (
    <>
      <p className="input-gender">
        Gender:
        <label htmlFor="myGender">
          <input type="radio" name="myGender" value="Male" onInput={func} ref={refq} />
          Male
        </label>
        <label htmlFor="myGender">
          <input type="radio" name="myGender" value="Female" onInput={func} ref={refM} />
          Female
        </label>
        <label htmlFor="myGender">
          <input type="radio" name="myGender" value="Another" onInput={func} ref={refF} />
          Another
        </label>
      </p>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refE}>
        Please choose gender
      </p>
    </>
  );
};

export default formTypeRadio;
