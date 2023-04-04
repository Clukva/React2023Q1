import React, { useEffect, useState } from 'react';
import { IState } from '../interfaces/MyCharacterInterfases';

function MyCharacter() {
  const [state, setState] = useState<IState>({
    error: null,
    isLoaded: false,
    items: [],
    inputValue: localStorage.getItem('input') || '',
  });

  useEffect(() => {
    localStorage.setItem('input', state.inputValue);

    fetch('https://rickandmortyapi.com/api/character/?page=8')
      .then((res) => res.json())
      .then(
        (result) => {
          setState({
            ...state,
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          setState({
            ...state,
            isLoaded: true,
            error,
          });
        }
      );
  }, []);

  useEffect(() => {
    localStorage.setItem('input', state.inputValue);
  }, [state.inputValue]);

  useEffect(() => {
    return (function ret() {
      if (localStorage.getItem('input')) {
        setState({ ...state, inputValue: localStorage.getItem('input') as string });
      }
    })();
  }, []);

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  }
  if (!state.isLoaded) {
    return <div className="downloading-title">Downloading...</div>;
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
              value={state.inputValue}
              onChange={(e) => setState({ ...state, inputValue: e.target.value })}
            />
          </form>
        </div>
      </div>
      <div className="main-cards">
        <div>
          {state.items?.map((item) => (
            <React.Fragment key={item.id}>
              <section className="main-card">
                <section>
                  <img className="card-image" src={item.image} alt="character" />
                </section>
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

export default MyCharacter;
