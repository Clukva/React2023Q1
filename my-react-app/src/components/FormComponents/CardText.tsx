import { ChangeEventHandler, LegacyRef } from 'react';

interface FormTypeTextProps {
  nameForm: string;
  func: ChangeEventHandler<HTMLInputElement> | undefined;
  refName: LegacyRef<HTMLParagraphElement> | undefined;
  surname: string;
  refSur: LegacyRef<HTMLParagraphElement> | undefined;
}

const formTypeText: React.FC<FormTypeTextProps> = ({
  nameForm,
  func,
  refName,
  surname,
  refSur,
}) => {
  return (
    <>
      <label className="input-name" htmlFor="nameForm">
        Name:
        <input id="nameForm" type="text" value={nameForm} onChange={func} name="nameForm" />
      </label>

      <p className="input-text-error" style={{ opacity: 0 }} ref={refName}>
        Please write name correctly, example Stiven
      </p>

      <label className="input-name" htmlFor="surname">
        Surname:
        <input id="surname" type="text" value={surname} onChange={func} name="surname" />
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refSur}>
        Please write surname correctly example Sigal
      </p>
    </>
  );
};

export default formTypeText;
