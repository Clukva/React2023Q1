import React, { SyntheticEvent } from 'react';
import { IPropsForm, IStateForm } from '../interfaces/MyCharacterInterfases';

export default class MyForm extends React.Component<IPropsForm, IStateForm> {
  constructor(props: IPropsForm | Readonly<IPropsForm>) {
    super(props);
    this.state = {
      formValues: {
        nameForm: '',
        surname: '',
        birthday: '',
        country: '',
        birthpersonalData: '',
        newsletter: '',
        myGender: '',
      },
      cardsArray: [],
      myImage: null,
      // eslint-disable-next-line react/no-unused-state
      imagePrev: '',
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
    const newValue = type === 'checkbox' ? checked : value;
    const newValueRadio = type === 'radio' ? value : `I ${value}`;
    this.setState({
      formValues: {
        ...formValues,
        [name]: newValue ? newValueRadio : `I dont ${value}`,
      },
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { formValues } = this.state;
    const { cardsArray } = this.state;

    this.setState({
      cardsArray: [...cardsArray, formValues],
      formValues: {
        nameForm: '',
        surname: '',
        birthday: '',
        country: '',
        birthpersonalData: '',
        newsletter: '',
        myGender: '',
      },
      myImage: null,
    });
  };

  handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const { files } = inputElement;
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          myImage: file,
          // eslint-disable-next-line react/no-unused-state
          imagePrev: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }

    /*     const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imagePrev: reader.result as string });
      this.forceUpdate();
    }; */
  };

  render() {
    const { formValues, cardsArray, myImage, imagePrev } = this.state;
    const { nameForm, surname, birthday, country } = formValues;

    /*     let imagePrev = null;
    if (myImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        imagePrev = <img src={result} alt="result" />;
        this.forceUpdate();
      };
      reader.readAsDataURL(myImage);
    } */

    return (
      <div>
        {' '}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameForm">
            Name:
            <input type="text" value={nameForm} onChange={this.handleChange} name="nameForm" />
          </label>
          <label htmlFor="surname">
            Surname:
            <input type="text" value={surname} onChange={this.handleChange} name="surname" />
          </label>
          <label htmlFor="birthday">
            Birthday:
            <input type="date" value={birthday} onChange={this.handleChange} name="birthday" />
          </label>
          <label htmlFor="country">
            Country:
            <select inputMode="text" name="country" value={country} onChange={this.handleChange}>
              <option value="Belarus" selected>
                Belarus
              </option>
              <option value="Litunia">Litunia</option>
              <option value="Latvia">Latvia</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Russia">Russia</option>
              <option value="Another country">Another country</option>
            </select>
          </label>
          <label htmlFor="birthpersonalData">
            <input
              type="checkbox"
              name="birthpersonalData"
              value="consent to my personal data"
              onChange={this.handleChangeChekbox}
            />
            I consent to my personal data
          </label>
          <label htmlFor="newsletter">
            <input
              type="checkbox"
              name="newsletter"
              value="subscribe to the newsletter"
              onChange={this.handleChangeChekbox}
            />
            Subscribe to the newsletter
          </label>
          <p>
            Gender:
            <label htmlFor="myGender">
              <input
                type="radio"
                name="myGender"
                value="Male"
                onChange={this.handleChangeChekbox}
              />
              Male
            </label>
            <label htmlFor="myGender">
              <input
                type="radio"
                name="myGender"
                value="Female"
                onChange={this.handleChangeChekbox}
              />
              Female
            </label>
            <label htmlFor="myGender">
              <input
                type="radio"
                name="myGender"
                value="Another"
                onChange={this.handleChangeChekbox}
              />
              Another
            </label>
          </p>
          <label htmlFor="myImage">
            My Image:
            <input type="file" name="myImage" onChange={this.handleFileSelect} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {cardsArray.map((card) => (
          <div className="form-cards" key={new Date().getTime()}>
            <h6>{`Name: ${card.nameForm}`}</h6>
            <h6>{`Surname: ${card.surname}`}</h6>
            <h6>{`Birthday: ${card.birthday}`}</h6>
            <h6>{`Country: ${card.country}`}</h6>
            <h6>{`${card.birthpersonalData}`}</h6>
            <h6>{`${card.newsletter}`}</h6>
            <h6>{`${card.myGender}`}</h6>
            <h6>
              <img src={`${imagePrev}`} alt="result" />
            </h6>
          </div>
        ))}
      </div>
    );
  }
}
