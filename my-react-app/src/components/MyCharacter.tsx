/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React, { createRef, useEffect, useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { IItems, IState } from '../interfaces/MyCharacterInterfases';
import Modal from './Modal';

interface IStateItem {
  error: null | { message: string };
  isLoaded: boolean;
  items: Array<IItems>;
}

function MyCharacter() {
  const [state, setState] = useState<IState>({
    error: null,
    isLoaded: false,
    items: [],
    inputValue: localStorage.getItem('input') || '',
  });
  const [modalContent, setModalContent] = useState<IStateItem>({
    error: null,
    isLoaded: false,
    items: [],
  });

  const inputRefCards = createRef<HTMLInputElement>();
  const [isOpen, setIsOpen] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(1);

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
    fetch(`https://rickandmortyapi.com/api/character/${currentCardId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setModalContent({
            ...modalContent,
            isLoaded: true,
            items: [result],
          });
          console.log(modalContent);
        },
        (error) => {
          setModalContent({
            ...modalContent,
            isLoaded: true,
            error,
          });
        }
      );
  }, [currentCardId]);

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
        {modalContent.isLoaded && (
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="modal__content">
              <h1>{modalContent.items[0]?.name}</h1>

              <img src={modalContent.items[0]?.image} alt={modalContent.items[0]?.name} />
              <p>
                <b>Gender:</b> {modalContent.items[0]?.gender}
              </p>
              <p>
                <b>Species:</b> {modalContent.items[0]?.species}
              </p>
              <p>
                <b>Type:</b> {modalContent.items[0]?.type || 'not specified'}
              </p>
              <p>
                <b>Status:</b> {modalContent.items[0]?.status || 'not specified'}
              </p>
            </div>
          </Modal>
        )}
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
                aria-hidden="true"
              >
                <section>
                  <img className="card-image" src={item.image} alt="character" />
                </section>
                <section className="card-description">
                  Name <b>{item.name}</b>
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
