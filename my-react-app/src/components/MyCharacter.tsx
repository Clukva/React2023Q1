import React from 'react';
import { IProps, IState } from '../interfaces/MyCharacterInterfases';

export default class MyCharacter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    const inputValue = localStorage.getItem('input') || '';
    this.setState({ inputValue });

    fetch('https://rickandmortyapi.com/api/character/?page=8')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentWillUnmount(): void {
    const { inputValue } = this.state;
    localStorage.setItem('input', inputValue);
  }

  render() {
    const { error, isLoaded, items, inputValue } = this.state;

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
      <>
        <div className="main-page">
          <div className="main-page--form">
            <form action="">
              <input
                className="main-page--input"
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => this.setState({ inputValue: e.target.value })}
              />
            </form>
          </div>
        </div>
        <div className="main-cards">
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
        </div>
      </>
    );
  }
}
