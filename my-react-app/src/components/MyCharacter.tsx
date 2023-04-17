import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QueryObserverResult } from 'react-query';
import { addSeachString } from '../store/searchSlice';
import { IItems, IState, ResponseType, CustomError } from '../interfaces/MyCharacterInterfases';
import Modal from './Modal';
import { RootState } from '../store/store';
import { useGetCardsQuery } from '../store/rickApi';
import { useGetCardQuery } from '../store/cardApi';

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
  const [currentCardId, setCurrentCardId] = useState(1);

  const result = useGetCardsQuery(`?name=${inputStateValue}`) as unknown as QueryObserverResult<
    ResponseType,
    CustomError
  >;
  const { data, isLoading, error } = result;

  const resultCard = useGetCardQuery(`${currentCardId}`) as unknown as QueryObserverResult<IItems>;

  const [isOpen, setIsOpen] = useState(false);

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

  if (isLoading)
    return (
      <div className="ring">
        Loading <span> </span>
      </div>
    );

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
        {resultCard.data && isOpen && (
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="modal__content">
              <h1>{resultCard.data?.name}</h1>
              <img src={resultCard.data?.image} alt={resultCard.data?.name} />
              <p>
                <b>Gender:</b> {resultCard.data?.gender}
              </p>
              <p>
                <b>Species:</b> {resultCard.data?.species}
              </p>
              <p>
                <b>Type:</b> {resultCard.data?.type || 'not specified'}
              </p>
              <p>
                <b>Status:</b> {resultCard.data?.status || 'not specified'}
              </p>
            </div>
          </Modal>
        )}
        <div>
          {error ? (
            <>
              {' '}
              <h1>
                Oh no, there was an error: {`${error.status}`}
                <br />
                {`${error.data.error}`}
              </h1>
            </>
          ) : isLoading ? (
            <>
              {' '}
              <div className="ring">
                Loading <span> </span>
              </div>
            </>
          ) : (
            !isLoading &&
            data &&
            data.results?.map((item) => (
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
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MyCharacter;
