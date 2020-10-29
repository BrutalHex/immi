import React from 'react';
import LazyLoad from 'react-lazyload';
import DefaultPlaceHolder from './DefaultPlaceHolder';

const ImageLazy = (props) => {
  return (
    <LazyLoad debounce={false} placeholder={<DefaultPlaceHolder />}>
      <img className={`${props.classes}`} src={props.link} />
    </LazyLoad>
  );
};

export default ImageLazy;
