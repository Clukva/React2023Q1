import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSeachString } from '../store/searchSlice';
import { IState, IStateItem } from '../interfaces/MyCharacterInterfases';
import Modal from './Modal';
import { RootState } from '../store';

function MyCharacter() {
  const buttonRefSearch = useRef<HTMLInputElement>(null);

  const inputStateValue = useSelector((state: RootState) => state.search.seachString);

  const dispatch = useDispatch();

  const addSearch = (qqq: string) => dispatch(addSeachString(qqq));

  const [state, setState] = useState<IState>({
    error: null,
    isLoaded: false,
    items: [],
    inputValue: inputStateValue as string,
  });
  const [modalContent, setModalContent] = useState<IStateItem>({
    error: null,
    isLoaded: false,
    items: [],
  });
  const [isOpen, setIsOpen] = useState(false);
  const [currentCardId, setCurrentCardId] = useState(1);

  useEffect(() => {
    setTimeout(
      () =>
        fetch(`https://rickandmortyapi.com/api/character/${`?name=${inputStateValue}`}`)
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
          ),
      500
    );
  }, [inputStateValue]);

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
    return (function ret() {
      if (inputStateValue) {
        setState({
          ...state,
          inputValue: inputStateValue as string,
        });
      }
    })();
  }, []);

  if (state.error) return <div>Error: {state.error.message}</div>;
  if (!state.isLoaded)
    return (
      <div className="ring">
        Loading <span> </span>
      </div>
    );

  if (modalContent.error) return <div>Error: {modalContent.error.message}</div>;
  if (!modalContent.isLoaded) {
    return (
      <div className="ring">
        Loading <span> </span>
      </div>
    );
  }

  return (
    <>
      <form action="" className="main-page-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="main-page--input"
          type="text"
          placeholder="Search"
          value={state.inputValue}
          onChange={(e) => {
            setState({ ...state, inputValue: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (buttonRefSearch.current) {
                buttonRefSearch.current.click();
              }
              addSearch(state.inputValue);
            }
          }}
          ref={buttonRefSearch}
        />
        <button
          type="button"
          onClick={() => {
            addSearch(state.inputValue);
          }}
        >
          Search
        </button>
      </form>

      <div className="main-cards">
        {/*   {!modalContent.isLoaded && (
          <Loading
            error={state.error}
            isLoaded={state.isLoaded}
            items={state.items}
            inputValue={state.inputValue}
          />
        )} */}
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
