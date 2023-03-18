import React, { FC } from 'react';
import CardComponent from '../components/MyCharacter';

const addMainPage: FC = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-page--form">
          <form action="">
            <input className="main-page--input" type="text" placeholder="Search" />
          </form>
        </div>
      </div>
      <div className="main-cards">
        <CardComponent />
      </div>
    </>
  );
};

export default addMainPage;
