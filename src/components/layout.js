import React from 'react';
import '../sass/main.scss';

const Layout = ({children})=>{
  return(
    <div className="container">{children}</div>
  )
}

export default Layout;