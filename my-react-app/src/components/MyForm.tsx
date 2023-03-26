import React, { createRef, SyntheticEvent } from 'react';
import { IPropsForm, IStateForm } from '../interfaces/MyCharacterInterfases';

export default class MyForm extends React.Component<IPropsForm, IStateForm> {
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
        // eslint-disable-next-line react/no-unused-state
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
    /*     event.preventDefault();
     */
    const { name, value, type, checked } = event.target;
    const { formValues } = this.state;
    const newValue = type === 'checkbox' && checked ? `I ${value}` : `I dont ${value}`;
    const newValueRadio = type === 'radio' ? value : `I ${value}`;
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
      !surname ||
      !nameForm ||
      !birthday ||
      !country ||
      !myGender ||
      !myImage ||
      !this.inputRefSub.current?.checked
    ) {
      if (!nameForm) {
        this.inputRefName.current?.setAttribute('style', `opacity: 1`);
      } else if (nameForm) {
        this.inputRefName.current?.setAttribute('style', `opacity: 0`);
      }
      if (!surname) {
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
    // eslint-disable-next-line no-console
    console.log(this.inputRefNews.current?.checked);

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
  };

  handleFileSelect = (/* event: React.ChangeEvent<HTMLInputElement> */) => {
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
        <form className="form-conteiner" onSubmit={this.handleSubmit} ref={this.inputRefForm}>
          <label className="input-name" htmlFor="nameForm">
            Name:
            <input type="text" value={nameForm} onChange={this.handleChange} name="nameForm" />
          </label>
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefName}>
            Please write name correctly
          </p>

          <label className="input-name" htmlFor="surname">
            Surname:
            <input type="text" value={surname} onChange={this.handleChange} name="surname" />
          </label>
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefSurname}>
            Please write surname correctly
          </p>

          <label className="input-name" htmlFor="birthday">
            Birthday:
            <input type="date" value={birthday} onChange={this.handleChange} name="birthday" />
          </label>
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefData}>
            Please write date correctly
          </p>

          <label className="input-name" htmlFor="country">
            Country:
            <select name="country" value={country} onChange={this.handleChange}>
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
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefCountry}>
            Please write country correctly
          </p>

          <label htmlFor="birthpersonalData">
            <input
              type="checkbox"
              name="birthpersonalData"
              value="consent to my personal data"
              onChange={this.handleChangeChekbox}
              ref={this.inputRef}
            />
            Consent to my personal data
          </label>
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              name="newsletter"
              value="subscribe to the newsletter"
              onChange={this.handleChangeChekbox}
              ref={this.inputRefSub}
            />
            Subscribe to the newsletter (required field)
          </label>
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefNews}>
            Please choose checkbox
          </p>
          <p className="input-gender">
            Gender:
            <label htmlFor="myGender">
              <input
                type="radio"
                name="myGender"
                value="Male"
                onChange={this.handleChangeChekbox}
                ref={this.inputRefMale}
              />
              Male
            </label>
            <label htmlFor="myGender">
              <input
                type="radio"
                name="myGender"
                value="Female"
                onChange={this.handleChangeChekbox}
                ref={this.inputRefFemale}
              />
              Female
            </label>
            <label htmlFor="myGender">
              <input
                type="radio"
                name="myGender"
                value="Another"
                onChange={this.handleChangeChekbox}
                ref={this.inputRefAnother}
              />
              Another
            </label>
          </p>
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefGender}>
            Please choose gender
          </p>

          <label className="input-name" htmlFor="myImage">
            My Image:
            <input type="file" name="myImage" ref={this.fileRef} onChange={this.handleFileSelect} />
          </label>
          <p className="input-text-error" style={{ opacity: 0 }} ref={this.inputRefImage}>
            Please choose image
          </p>

          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
        <div className="form-cards-conteiner">
          {cardsArray.map((card) => (
            <div className="form-cards" key={setTimeout(new Date().toISOString())}>
              <img className="form-image" src={`${card.imagePrev}`} alt="downlod images" />
              <pre>
                {`Name: ${card.nameForm}`}
                <br />
                {`Surname: ${card.surname}`}
                <br />
                {`Birthday: ${card.birthday}`}
                <br />
                {`Country: ${card.country}`}
                <br />
                {`Gender: ${card.myGender}`}
                <br />
                {`${card.birthpersonalData}`}
                <br />
                {`${card.newsletter}`}
              </pre>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
