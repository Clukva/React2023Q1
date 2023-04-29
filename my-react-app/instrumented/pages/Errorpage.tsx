import React, { FC } from 'react';

const addErrorPage: FC = () => {
  return (
    <div className="main-error">
      <h1>404</h1>
      <h3>
        Sorry, the requested page was not found. You may have clicked on a link that was in error,
        or the resource may have been removed.
      </h3>
    </div>
  );
};

export default addErrorPage;
