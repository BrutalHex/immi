import { findAllByTitle } from '@testing-library/react';

import React from 'react';

const CardInfoBar = (props) => {
  let { itemTitle, itemValue } = props;

  itemTitle = itemTitle.toUpperCase();

  if (Array.isArray(itemValue)) {
    const elems = itemValue.map((item, inid) => <li key={`itemsPair${inid}`}>{item}</li>);
    return (
      <div className="whole info-bar">
        <div className="whole">
          <span className="title">{itemTitle} :</span>
        </div>
        <div className="whole">
          <ul className="value  padding-left-2">{elems}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className="whole info-bar">
      <span className="title">{itemTitle} :</span>
      <span className="value">{itemValue}</span>
    </div>
  );
};

export default CardInfoBar;
