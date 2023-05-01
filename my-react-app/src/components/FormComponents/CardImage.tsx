import { ChangeEventHandler, LegacyRef } from 'react';

interface FormTypeImageProps {
  func: ChangeEventHandler<HTMLInputElement> | undefined;
  refW: LegacyRef<HTMLInputElement> | undefined;
  refM: LegacyRef<HTMLInputElement> | undefined;
  refF: LegacyRef<HTMLParagraphElement> | undefined;
}
/* const formTypeSelect: React.FC<FormTypeSelectProps> = ({ country, func, refSel }) => {
 */
const formTypeImage: React.FC<FormTypeImageProps> = ({ func, refW, refM, refF }) => {
  return (
    <>
      <label className="input-name" htmlFor="myImage">
        My Image:
        <input type="file" name="myImage" ref={refW} onChange={func} />
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
};

export default formTypeImage;
