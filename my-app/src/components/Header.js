import React from 'react';
import Nav from './Nav';
import Image from 'react-bootstrap/Button';
function Header() {
  return (
    <div className="header">
     <h1 className="h1">Grundeinkommen's Graswurzel</h1>
     
     <div className='vision'>Vision: A society guaranteeing every member a periodic payment, enough to enable life in dignity without the necessity to provide anything in return.
<br/>
A transformed society of free individuals who have options, express their creative capacities, pursue meaningful action, spend more time with their families, and give back to society. 
<br/>
A fairer and more equitable world as a result of others emulating the German model of UBI after it has proven successful.
<br/>
Through new methods of political canvassing and by promoting a new narrative around UBI, we will show citizens and leaders alike that this is the detour we must take to prepare ourselves for the future and create a more equitable world.
    </div>
     <Nav></Nav>

    </div>
  );
}

export default Header;

