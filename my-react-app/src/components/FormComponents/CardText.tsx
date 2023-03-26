import { ChangeEventHandler, LegacyRef } from 'react';

export default function formTypeText(
  nameForm: string,
  func: ChangeEventHandler<HTMLInputElement> | undefined,
  ref: LegacyRef<HTMLParagraphElement> | undefined,
  surname: string,
  funcSur: ChangeEventHandler<HTMLInputElement> | undefined,
  refSur: LegacyRef<HTMLParagraphElement> | undefined
) {
  return (
    <>
      <label className="input-name" htmlFor="nameForm">
        Name:
        <input type="text" value={nameForm} onChange={func} name="nameForm" />
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={ref}>
        Please write name correctly, example Stiven
      </p>

      <label className="input-name" htmlFor="surname">
        Surname:
        <input type="text" value={surname} onChange={funcSur} name="surname" />
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={refSur}>
        Please write surname correctly example Sigal
      </p>
    </>
  );
}
