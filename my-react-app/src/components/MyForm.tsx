import React, { createRef, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IStateForm } from '../interfaces/MyCharacterInterfases';
import validateTextInput from '../utils/utils';
import { addFormCard } from '../store/formSlice';
import { RootState } from '../store/store';

export default function MyForm1() {
  const inputRefName = createRef<HTMLInputElement>();
  const inputRefSurname = createRef<HTMLInputElement>();
  const inputRefData = createRef<HTMLInputElement>();
  const inputRefCountry = createRef<HTMLInputElement>();
  const inputRefNews = createRef<HTMLInputElement>();
  const inputRefNewsSub = createRef<HTMLInputElement>();
  const inputRefGender = createRef<HTMLInputElement>();
  const inputRefImage = createRef<HTMLInputElement>();
  const inputRefSubmit = createRef<HTMLInputElement>();

  const inputImageRef = useRef([false]);
  let url = '';

  const dispatch = useDispatch();
  const inputFormValue = useSelector((state: RootState) => state.cards.cards);

  /*  useEffect(() => {}, [inputFormValue]); */

  const [cardData, setCardData] = useState<IStateForm>({
    formValues: {
      nameForm: '',
      surname: '',
      birthday: '',
      country: '',
      birthpersonalData: 'I dont  consent to my personal data',
      newsletter: 'I subscribe to the newsletter',
      myGender: '',
      myImage: [null],
      imagePrev: '',
    },
    cardsArray: [],
  });

  const { register, handleSubmit, reset } = useForm<IStateForm>();

  const handleChangeText: SubmitHandler<IStateForm> = (data) => {
    const {
      nameForm,
      surname,
      birthday,
      country,
      birthpersonalData,
      newsletter,
      myGender,
      imagePrev,
    } = data.formValues;
    const { formValues, cardsArray } = cardData;

    if (
      !nameForm ||
      !validateTextInput(nameForm) ||
      !surname ||
      !validateTextInput(surname) ||
      !birthday ||
      !country ||
      country === 'Choose country' ||
      !myGender ||
      !inputImageRef.current[0]
    ) {
      if (!nameForm || !validateTextInput(nameForm)) {
        inputRefName.current?.setAttribute('style', `opacity: 1`);
      } else if (nameForm) {
        inputRefName.current?.setAttribute('style', `opacity: 0`);
      }
      if (!surname || !validateTextInput(surname)) {
        inputRefSurname.current?.setAttribute('style', `opacity: 1`);
      } else if (surname) {
        inputRefSurname.current?.setAttribute('style', `opacity: 0`);
      }
      if (!birthday) {
        inputRefData.current?.setAttribute('style', `opacity: 1`);
      } else if (birthday) {
        inputRefData.current?.setAttribute('style', `opacity: 0`);
      }
      if (!country || country === 'Choose country') {
        inputRefCountry.current?.setAttribute('style', `opacity: 1`);
      } else if (country) {
        inputRefCountry.current?.setAttribute('style', `opacity: 0`);
      }
      if (!myGender) {
        inputRefGender.current?.setAttribute('style', `opacity: 1`);
      } else if (myGender) {
        inputRefGender.current?.setAttribute('style', `opacity: 0`);
      }
      if (!inputRefNewsSub.current?.checked) {
        inputRefNews.current?.setAttribute('style', `opacity: 1`);
      } else if (inputRefNewsSub.current?.checked) {
        inputRefNews.current?.setAttribute('style', `opacity: 0`);
      }
      if (!inputImageRef.current[0]) {
        inputRefImage.current?.setAttribute('style', `opacity: 1`);
      } else if (inputImageRef.current[0]) {
        inputRefImage.current?.setAttribute('style', `opacity: 0`);
      }
      return;
    }
    inputRefName.current?.setAttribute('style', `opacity: 0`);
    inputRefSurname.current?.setAttribute('style', `opacity: 0`);
    inputRefData.current?.setAttribute('style', `opacity: 0`);
    inputRefCountry.current?.setAttribute('style', `opacity: 0`);
    inputRefGender.current?.setAttribute('style', `opacity: 0`);
    inputRefNews.current?.setAttribute('style', `opacity: 0`);
    inputRefImage.current?.setAttribute('style', `opacity: 0`);

    setCardData({
      formValues: {
        ...formValues,
      },
      cardsArray: [
        ...cardsArray,
        {
          ...formValues,
          nameForm: nameForm as string,
          surname: `${surname}`,
          birthday: `${birthday}`,
          country: `${country}`,
          birthpersonalData: `${
            birthpersonalData
              ? 'I consent to my personal data'
              : 'I dont consent to my personal data'
          }`,
          newsletter: `${newsletter || 'I subscribe to the newsletter'}`,
          myGender: `${myGender}`,
          /* imagePrev: ; */
        },
      ],
    });
    dispatch(addFormCard({ ...data.formValues, imagePrev: formValues.imagePrev }));
    // eslint-disable-next-line no-console
    console.log(url);
    // eslint-disable-next-line no-console
    console.log(data.formValues, url);

    inputRefSubmit.current?.setAttribute('style', 'opacity: 1');
    reset();
    inputImageRef.current[0] = false;
    // eslint-disable-next-line no-console
    console.log(inputFormValue, formValues);
  };

  useEffect(() => {
    setTimeout(() => {
      inputRefSubmit.current?.setAttribute('style', 'opacity: 0');
    }, 3500);
  }, [handleChangeText]);

  const { formValues, cardsArray } = cardData;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    if (target.files && typeof target.files[0] === 'object') {
      const file = target.files[0];
      url = URL.createObjectURL(file);
      setCardData({
        formValues: {
          ...formValues,
          imagePrev: url,
        },
        cardsArray: [...cardsArray],
      });
    }
    inputImageRef.current[0] = true;

    return url;
  };

  return (
    <div>
      <form className="form-conteiner" onSubmit={handleSubmit(handleChangeText)}>
        <label className="input-name" htmlFor="formValues.nameForm">
          Name:
          <input id="id-input" type="text" {...register('formValues.nameForm')} />
        </label>

        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefName}>
          Please write name correctly, example Stiven
        </p>

        <label className="input-name" htmlFor="surname">
          Surname:
          <input id="surname" type="text" {...register('formValues.surname')} />
        </label>
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefSurname}>
          Please write surname correctly example Sigal
        </p>
        <label className="input-name" htmlFor="birthday">
          Birthday:
          <input
            type="date"
            min="1940-04-01"
            max="2023-04-06"
            {...register('formValues.birthday')}
          />
        </label>
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefData}>
          Please write date correctly
        </p>
        <label className="input-name" htmlFor="country">
          Country:
          <select {...register('formValues.country')}>
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
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefCountry}>
          Please write country correctly
        </p>

        <label htmlFor="birthpersonalData">
          <input
            type="checkbox"
            value="I consent to my personal data"
            {...register('formValues.birthpersonalData')}
          />
          Consent to my personal data
        </label>
        <label htmlFor="newsletter">
          <input
            type="checkbox"
            value="I subscribe to the newsletter"
            {...register('formValues.newsletter')}
            ref={inputRefNewsSub}
          />
          Subscribe to the newsletter (required field)
        </label>
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefNews}>
          Please choose checkbox
        </p>
        <p className="input-gender">
          Gender:
          <label htmlFor="myGender">
            <input type="radio" {...register('formValues.myGender')} value="Male" />
            Male
          </label>
          <label htmlFor="myGender">
            <input type="radio" {...register('formValues.myGender')} value="Female" />
            Female
          </label>
          <label htmlFor="myGender">
            <input type="radio" {...register('formValues.myGender')} value="Another" />
            Another
          </label>
        </p>
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefGender}>
          Please choose gender
        </p>
        <label className="input-name" htmlFor="myImage">
          My Image:
          <input type="file" multiple accept="image/*" onChange={handleFileSelect} />
        </label>
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefImage}>
          Please choose image
        </p>
        <p className="data-information" style={{ opacity: 0 }} ref={inputRefSubmit}>
          Data has been saved !
        </p>
        <input className="form-submit" type="submit" id="id-submit" />
      </form>
      <div className="form-cards-conteiner">
        {inputFormValue.length > 1 &&
          inputFormValue.map((card, i) => (
            <div className="form-cards" key={i}>
              <img className="form-image" src={card?.imagePrev} alt="downlod images" />
              <pre>
                {`Name: ${card?.nameForm}`} <br />
                {`Surname: ${card?.surname}`} <br />
                {`Birthday: ${card?.birthday}`} <br />
                {`Country: ${card?.country}`} <br />
                {`Gender: ${card?.myGender}`} <br />
                {`${card?.birthpersonalData}`} <br />
                {`${card?.newsletter}`}
              </pre>
            </div>
          ))}
        {}
      </div>
    </div>
  );
}
