import React , { useEffect } from 'react';
import Page from './Pages.jsx';
import { letterEvent } from '../js/home.js';
import Navi from './Navi.jsx';
import Experience from './Experience.jsx';


const Home = () => {
    
    useEffect(() => {
    
             letterEvent();
    },[])

     return(
        <Page
        footer={<Navi/>}
        >
         <div className="mainContainer">
            <h3 className="title">Introduce</h3>
            <div className="introContent">
                <ul>
                    <li><span><em>S</em><em>O</em><em>Y</em><em>E</em><em>'</em><em>S</em><br/>
                        <em>P</em><em>O</em><em>R</em><em>T</em><em>F</em><em>O</em><em>L</em><em>I</em><em>O</em></span></li>
                </ul>
                <ul>
                    <li><p><strong>NAME : </strong> Park Soye</p></li>
                    <li><p><strong>BIRTH : </strong> 1994. 12. 07</p></li>
                    <li><p><strong>POSITION : </strong>FRONTEND</p></li>
                    <li><p><strong>SKILLS : </strong> HTML, CSS, JAVASCRIPT, REACT, VUE</p></li>
                </ul>
           </div>
        </div>
        <Experience/>
        </Page>
     )
}

export default Home;