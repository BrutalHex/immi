import React from 'react';

const Spinner = ({ show, children }) => (
  <div className="whole overlayContainer">
    <div className={'spinner-overlay ' + (show ? 'blocks' : 'noBlocks')}>
      <div className="loader">Loading...</div>
    </div>
    {children}
  </div>
);

export default Spinner;
