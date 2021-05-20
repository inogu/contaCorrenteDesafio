import React from 'react';
import MainHeader from './main-header';

function Layout(props: any) {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </React.Fragment>
  );
}
export default Layout;
