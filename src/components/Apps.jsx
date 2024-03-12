import React from 'react';
import Page from './Pages';
import Navi from './Navi';
import ReactApp from './ReactApp';

const Apps = () => {

     return(
        <Page footer={<Navi/>}>
         <ReactApp />
        </Page>

     )
}

export default Apps;