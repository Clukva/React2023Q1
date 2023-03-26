import { ChangeEventHandler, LegacyRef } from 'react';

export default function formTypeDate(
  birthday: string,
  func: ChangeEventHandler<HTMLInputElement> | undefined,
  ref: LegacyRef<HTMLParagraphElement> | undefined
) {
  return (
    <>
      <label className="input-name" htmlFor="birthday">
        Birthday:
        <input type="date" value={birthday} onChange={func} name="birthday" />
      </label>
      <p className="input-text-error" style={{ opacity: 0 }} ref={ref}>
        Please write date correctly
      </p>
    </>
  );
}
