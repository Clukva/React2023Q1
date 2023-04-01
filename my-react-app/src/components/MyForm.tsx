/* eslint-disable react/jsx-props-no-spreading */
import React, { createRef, SyntheticEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPropsForm, IStateForm } from '../interfaces/MyCharacterInterfases';
import validateTextInput from '../utils/utils';
import FormTypeText from './FormComponents/CardText';
import FormTypeDate from './FormComponents/CardDate';
import FormTypeSelect from './FormComponents/CardSelect';
import FormTypeCheckbox from './FormComponents/CardCheckbox';
import FormTypeRadio from './FormComponents/CardRadio';
import FormTypeImage from './FormComponents/CardImage';

/* type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
}; */

export default function MyForm1() {
  const inputRefName = createRef<HTMLInputElement>();
  const inputRefSurname = createRef<HTMLInputElement>();
  const inputRefData = createRef<HTMLInputElement>();

  const [cardData, setCardData] = useState<IStateForm>({
    formValues: {
      nameForm: '',
      surname: '',
      birthday: '',
      country: '',
      birthpersonalData: 'I dont  consent to my personal data',
      newsletter: 'I dont subscribe to the newsletter',
      myGender: '',
      myImage: null,
      imagePrev: '',
    },
    cardsArray: [],
  });
  const { register, handleSubmit, reset } = useForm<IStateForm>();
  /* const onSubmit: SubmitHandler<IStateForm> = (data) => console.log(data); */

  const handleChangeText: SubmitHandler<IStateForm> = (data) => {
    const { nameForm, surname, birthday } = data.formValues;
    const { formValues, cardsArray } = cardData;

    setCardData({
      formValues: {
        ...formValues,
        nameForm: `${nameForm}`,
        surname: `${surname}`,
        birthday: `${birthday}`,
      },
      cardsArray: [...cardsArray, data.formValues],
    });

    reset();
  };

  const { formValues, cardsArray } = cardData;

  return (
    <div>
      <form className="form-conteiner" onSubmit={handleSubmit(handleChangeText)}>
        <label className="input-name" htmlFor="nameForm">
          Name:
          <input type="text" {...register('formValues.nameForm')} />
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
            max="2023-03-28"
            {...register('formValues.birthday')}
          />
        </label>
        <p className="input-text-error" style={{ opacity: 0 }} ref={inputRefData}>
          Please write date correctly
        </p>
        <input type="submit" />
      </form>
      <div className="form-cards-conteiner">
        {cardsArray.map((card, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="form-cards" key={i}>
            <img className="form-image" src={`${card.imagePrev}`} alt="downlod images" />
            <pre>
              {`Name: ${card.nameForm}`} <br />
              {`Surname: ${card.surname}`} <br />
              {`Birthday: ${card.birthday}`} <br />
              {`Country: ${card.country}`} <br />
              {`Gender: ${card.myGender}`} <br />
              {`${card.birthpersonalData}`} <br />
              {`${card.newsletter}`}
            </pre>
          </div>
        ))}
        {}
      </div>
    </div>
  );
}

/* export default class MyForm extends React.Component<IPropsForm, IStateForm> {
  private fileRef = createRef<HTMLInputElement>();

  private inputRefSub = createRef<HTMLInputElement>();

  private inputRef = createRef<HTMLInputElement>();

  private inputRefMale = createRef<HTMLInputElement>();

  private inputRefFemale = createRef<HTMLInputElement>();

  private inputRefAnother = createRef<HTMLInputElement>();

  private inputRefName = createRef<HTMLInputElement>();

  private inputRefSurname = createRef<HTMLInputElement>();

  private inputRefData = createRef<HTMLInputElement>();

  private inputRefCountry = createRef<HTMLInputElement>();

  private inputRefGender = createRef<HTMLInputElement>();

  private inputRefNews = createRef<HTMLInputElement>();

  private inputRefImage = createRef<HTMLInputElement>();

  private inputRefForm = createRef<HTMLFormElement>();

  private inputRefSubmit = createRef<HTMLParagraphElement>();

  constructor(props: IPropsForm | Readonly<IPropsForm>) {
    super(props);
    this.state = {
      formValues: {
        nameForm: '',
        surname: '',
        birthday: '',
        country: '',
        birthpersonalData: 'I dont  consent to my personal data',
        newsletter: 'I dont subscribe to the newsletter',
        myGender: '',
        myImage: null,
        imagePrev: '',
      },
      cardsArray: [],
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const { formValues } = this.state;
    this.setState({
      formValues: {
        ...formValues,
        [name]: value,
      },
    });
  };

  handleChangeChekbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const { formValues } = this.state;
    const newValue = type === 'checkbox' && checked ? `I ${value}` : `I dont ${value}`;
    const newValueRadio = type === 'radio' && checked ? value : `I ${value}`;
    this.setState({
      formValues: {
        ...formValues,
        [name]: type === 'checkbox' ? newValue : newValueRadio,
      },
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { formValues } = this.state;
    const { cardsArray } = this.state;
    const { nameForm, surname, birthday, country, myGender, myImage } = formValues;
    if (
      !nameForm ||
      !surname ||
      !birthday ||
      !country ||
      !myGender ||
      !myImage ||
      !this.inputRefSub.current?.checked
    ) {
      if (!nameForm || !validateTextInput(nameForm)) {
        this.inputRefName.current?.setAttribute('style', `opacity: 1`);
      } else if (nameForm) {
        this.inputRefName.current?.setAttribute('style', `opacity: 0`);
      }
      if (!surname || !validateTextInput(surname)) {
        this.inputRefSurname.current?.setAttribute('style', `opacity: 1`);
      } else if (surname) {
        this.inputRefSurname.current?.setAttribute('style', `opacity: 0`);
      }
      if (!birthday) {
        this.inputRefData.current?.setAttribute('style', `opacity: 1`);
      } else if (birthday) {
        this.inputRefData.current?.setAttribute('style', `opacity: 0`);
      }
      if (!country) {
        this.inputRefCountry.current?.setAttribute('style', `opacity: 1`);
      } else if (country) {
        this.inputRefCountry.current?.setAttribute('style', `opacity: 0`);
      }
      if (!myGender) {
        this.inputRefGender.current?.setAttribute('style', `opacity: 1`);
      } else if (myGender) {
        this.inputRefGender.current?.setAttribute('style', `opacity: 0`);
      }
      if (!this.inputRefSub.current?.checked) {
        this.inputRefNews.current?.setAttribute('style', `opacity: 1`);
      } else if (this.inputRefSub.current?.checked) {
        this.inputRefNews.current?.setAttribute('style', `opacity: 0`);
      }
      if (!myImage) {
        this.inputRefImage.current?.setAttribute('style', `opacity: 1`);
      } else if (myImage) {
        this.inputRefImage.current?.setAttribute('style', `opacity: 0`);
      }
      return;
    }
    this.inputRefName.current?.setAttribute('style', `opacity: 0`);
    this.inputRefSurname.current?.setAttribute('style', `opacity: 0`);
    this.inputRefData.current?.setAttribute('style', `opacity: 0`);
    this.inputRefCountry.current?.setAttribute('style', `opacity: 0`);
    this.inputRefGender.current?.setAttribute('style', `opacity: 0`);
    this.inputRefNews.current?.setAttribute('style', `opacity: 0`);
    this.inputRefImage.current?.setAttribute('style', `opacity: 0`);

    this.inputRefForm.current?.reset();

    this.setState({
      cardsArray: [...cardsArray, formValues],
      formValues: {
        nameForm: '',
        surname: '',
        birthday: '',
        country: '',
        birthpersonalData: 'I dont consent to my personal data',
        newsletter: 'I dont subscribe to the newsletter',
        myGender: '',
        myImage: null,
        imagePrev: '',
      },
    });
    this.inputRefSubmit.current?.setAttribute('style', `opacity: 1`);
    setTimeout(() => {
      this.inputRefSubmit.current?.setAttribute('style', `opacity: 0`);
    }, 0);
  };

  handleFileSelect = () => {
    const inputElement = this.fileRef.current;
    const { formValues } = this.state;
    if (inputElement && inputElement.files) {
      const { files } = inputElement;
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          formValues: {
            ...formValues,
            myImage: file,
            imagePrev: reader.result as string,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { formValues, cardsArray } = this.state;
    const { nameForm, surname, birthday, country } = formValues;
    return (
      <div>
        {' '}
        <form
          id="my-form"
          className="form-conteiner"
          onSubmit={this.handleSubmit}
          ref={this.inputRefForm}
        >
          <FormTypeText
            nameForm={nameForm}
            func={this.handleChange}
            refName={this.inputRefName}
            surname={surname}
            refSur={this.inputRefSurname}
          />
          <FormTypeDate birthday={birthday} func={this.handleChange} refq={this.inputRefData} />
          <FormTypeSelect
            country={country}
            func={this.handleChange}
            refSel={this.inputRefCountry}
          />
          <FormTypeCheckbox
            func={this.handleChangeChekbox}
            refe={this.inputRef}
            funcCk={this.handleChangeChekbox}
            refCk={this.inputRefSub}
            refError={this.inputRefNews}
          />
          <FormTypeRadio
            func={this.handleChangeChekbox}
            refq={this.inputRefMale}
            refM={this.inputRefFemale}
            refF={this.inputRefAnother}
            refE={this.inputRefGender}
          />
          <FormTypeImage
            func={this.handleFileSelect}
            refW={this.fileRef}
            refM={this.inputRefImage}
            refF={this.inputRefSubmit}
          />
        </form>
        <div className="form-cards-conteiner">
          {cardsArray.map((card, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="form-cards" key={i}>
              <img className="form-image" src={`${card.imagePrev}`} alt="downlod images" />
              <pre>
                {`Name: ${card.nameForm}`} <br />
                {`Surname: ${card.surname}`} <br />
                {`Birthday: ${card.birthday}`} <br />
                {`Country: ${card.country}`} <br />
                {`Gender: ${card.myGender}`} <br />
                {`${card.birthpersonalData}`} <br />
                {`${card.newsletter}`}
              </pre>
            </div>
          ))}
        </div>
      </div>
    );
  }
} */
