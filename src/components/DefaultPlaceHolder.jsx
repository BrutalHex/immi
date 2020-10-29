import React from 'react';

const DefaultPlaceHolder = () => {
  return (
    <img className="card-img place-holder center" src={`${process.env.PUBLIC_URL}/img_load.gif`} />
  );
};

export default DefaultPlaceHolder;
