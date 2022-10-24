import React from 'react';
// import German from './German';
import {Link} from "react-router-dom";
// import './components.css'
function Nav() {
  return (
    <div className="nav-container">
     
{/* <a className="nav" href='/home'>Home</a> */}
<a className="nav" href='#mission'>Mission</a>
<a className="nav" href='#support'>Support Us </a>
{/* <a className="nav" href='/contact'>Contact </a> */}

    </div>
  );
}

export default Nav;
