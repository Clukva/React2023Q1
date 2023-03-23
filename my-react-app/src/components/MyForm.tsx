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
      },
      cardsArray: [],
    };
  }

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const { formValues } = this.state;
    this.setState({
      formValues: {
        ...formValues,
        [name]: value,
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
      },
    });
  };

  render() {
    const { formValues } = this.state;
    const { cardsArray } = this.state;
    const { nameForm, surname, birthday, country } = formValues;

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
              <option value="Belarus">Belarus</option>
              <option value="Litunia">Litunia</option>
              <option value="Latvia">Latvia</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Russia">Russia</option>
              <option value="Another country">Another country</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        {cardsArray.map((card) => (
          <div className="form-cards" key={new Date().getTime()}>
            <h6>{`Name: ${card.nameForm}`}</h6>
            <h6>{`Surname: ${card.surname}`}</h6>
            <h6>{`Birthday: ${card.birthday}`}</h6>
            <h6>{`Country: ${card.country}`}</h6>
          </div>
        ))}
      </div>
    );
  }
}
