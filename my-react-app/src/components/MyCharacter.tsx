/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React, { createRef, useEffect, useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { IState } from '../interfaces/MyCharacterInterfases';
import Modal from './Modal';

function MyCharacter() {
  const [state, setState] = useState<IState>({
    error: null,
    isLoaded: false,
    items: [],
    inputValue: localStorage.getItem('input') || '',
  });
  const inputRefCards = createRef<HTMLInputElement>();
  const [isOpen, setIsOpen] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(0);

  useEffect(() => {
    localStorage.setItem('input', state.inputValue);

    fetch(`https://rickandmortyapi.com/api/character/${`?name=${state.inputValue}`}`)
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
      <form action="" className="main-page-form">
        <input
          className="main-page--input"
          type="text"
          placeholder="Search"
          value={state.inputValue}
          onChange={(e) => setState({ ...state, inputValue: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
      <div className="main-cards">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="modal__content">
            <h1>Modal</h1>
            <p>{currentCardId}</p>
            <p>sdgasdfg</p>
          </div>
        </Modal>
        <div>
          {state.items?.map((item) => (
            <React.Fragment key={item.id}>
              <section
                className="main-card"
                ref={inputRefCards}
                id={String(item.id)}
                onClick={() => {
                  setIsOpen(true);
                  setCurrentCardId(item.id);
                }}
              >
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
