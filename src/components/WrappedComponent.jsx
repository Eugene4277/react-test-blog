import React from 'react';
import Sidebar from './Sidebar';
import AccountData from './AccountData';
import ResponsiveNav from './ResponsiveNav';

function WrappedComponent({ component: Component }) {
  if (window.innerWidth < 992) return (
    <>
      <div className="col-12">
        <ResponsiveNav />
      </div>
      <div className="col-12 main" style={{ marginTop: "5.5rem" }}>
        <Component />
      </div>
    </>);
  else
    return (
      <>
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-6 main">
          <Component />
        </div>
        <div className="col-lg-3">
          <AccountData />
        </div>
      </>
    );
}

export default WrappedComponent;