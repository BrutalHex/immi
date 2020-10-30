import React from 'react';
import { Route } from 'react-router-dom';

export const DashboardLayout = ({ children }) => (
  <div className="whole">
    <div className="whole">
      <img className="banner-image center" src={`${process.env.PUBLIC_URL}/pokemon_banner.svg`} />
    </div>
    <div className="whole">{children}</div>
  </div>
);

export const DashboardLayoutRoute = ({ Component, ...rest }) => {
  return (
    <DashboardLayout>
      <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />{' '}
    </DashboardLayout>
  );
};
export default DashboardLayoutRoute;
