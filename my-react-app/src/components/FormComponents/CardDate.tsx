import { ChangeEventHandler, LegacyRef } from 'react';

interface FormTypeDateProps {
  birthday: string;
  func: ChangeEventHandler<HTMLInputElement> | undefined;
  refq: LegacyRef<HTMLParagraphElement> | undefined;
}

const formTypeDate: React.FC<FormTypeDateProps> = ({ birthday, func, refq }) => {
  return (
    <>
      <label className="input-name" htmlFor="birthday">
        Birthday:
        <input
          type="date"
          value={birthday}
          onChange={func}
          name="birthday"
          min="1940-04-01"
          max="2023-03-28"
        />
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refq}>
        Please write date correctly
      </p>
    </>
  );
};

export default formTypeDate;
