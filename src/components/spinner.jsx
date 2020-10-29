import React from 'react';
import { connect } from 'react-redux';

const Spinner = ({ show, children }) => (
  <div className="whole overlayContainer">
    <div className={'spinner-overlay ' + (show ? 'blocks' : 'noBlocks')}>
      <div className="loader">Loading...</div>
    </div>
    {children}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.main.pending,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
const SpinnerContainer = connect(mapStateToProps, mapDispatchToProps)(Spinner);
export default SpinnerContainer;
