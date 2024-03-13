import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => {

     return(
        <div className="nav">
            <ul>
               <Link to='/apps'>Project</Link>
               <Link to='/'>Home</Link>
               <Link to='/web'>Website</Link>
            </ul>
        </div>
     )
}

export default Navi;