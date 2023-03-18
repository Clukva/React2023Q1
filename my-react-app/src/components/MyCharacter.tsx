import React, { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

type IItems = {
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
};

interface IState {
  error: null | { message: string };
  isLoaded: boolean;
  items: Array<IItems>;
}

export default class MyCharacter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/?page=8')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
          console.log(result.results);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Загрузка...</div>;
    }

    function renderImg(url: string): React.ReactNode {
      return <img className="card-image" src={url} alt="character" />;
    }
    return (
      <div>
        {items?.map((item) => (
          <React.Fragment key={item.id}>
            <section className="main-card">
              <section>{renderImg(item.image)}</section>
              <section className="card-description">
                Name <b>{item.name}</b>
                <br />
                Gender <b>{item.gender}</b>
                <br />
                Species <b>{item.species}</b>
                <br />
                Type <b>{item.type}</b>
                <br />
                Status <b>{item.status}</b>
              </section>
            </section>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
