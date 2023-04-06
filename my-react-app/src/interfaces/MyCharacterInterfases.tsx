// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {}

export interface IItems {
  created: string;
  episode: [number, string];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IState {
  error: null | { message: string };
  isLoaded: boolean;
  items: Array<IItems>;
  inputValue: string;
}
export interface IStateItem {
  error: null | { message: string };
  isLoaded: boolean;
  items: Array<IItems>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPropsForm {}

export interface IStateForm {
  formValues: {
    nameForm?: string;
    surname?: string;
    birthday?: string;
    country?: string;
    birthpersonalData?: string;
    newsletter?: string;
    myGender?: string;
    myImage?: [File | null];
    imagePrev?: string;
  };
  cardsArray: {
    nameForm?: string;
    surname?: string;
    birthday?: string;
    country?: string;
    birthpersonalData?: string;
    newsletter?: string;
    myGender?: string;
    myImage?: [File | null];
    imagePrev?: string;
  }[];
}
