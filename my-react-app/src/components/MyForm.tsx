import React, { createRef, SyntheticEvent } from 'react';
import { IPropsForm, IStateForm } from '../interfaces/MyCharacterInterfases';
import validateTextInput from '../utils/utils';
import formTypeText from './FormComponents/CardText';
import formTypeDate from './FormComponents/CardDate';
import formTypeSelect from './FormComponents/CardSelect';
import formTypeCheckbox from './FormComponents/CardCheckbox';
import formTypeRadio from './FormComponents/CardRadio';
import formTypeImage from './FormComponents/CardImage';

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
    }, 4000);
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
        <form className="form-conteiner" onSubmit={this.handleSubmit} ref={this.inputRefForm}>
          {formTypeText(
            nameForm,
            this.handleChange,
            this.inputRefName,
            surname,
            this.handleChange,
            this.inputRefSurname
          )}
          {formTypeDate(birthday, this.handleChange, this.inputRefData)}
          {formTypeSelect(country, this.handleChange, this.inputRefCountry)}
          {formTypeCheckbox(
            this.handleChangeChekbox,
            this.inputRef,
            this.handleChangeChekbox,
            this.inputRefSub,
            this.inputRefNews
          )}
          {formTypeRadio(
            this.handleChangeChekbox,
            this.inputRefMale,
            this.inputRefFemale,
            this.inputRefAnother,
            this.inputRefGender
          )}
          {formTypeImage(
            this.handleFileSelect,
            this.fileRef,
            this.inputRefImage,
            this.inputRefSubmit
          )}
        </form>
        <div className="form-cards-conteiner">
          {cardsArray.map((card) => (
            <div className="form-cards" key={setTimeout(new Date().toISOString())}>
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
}
