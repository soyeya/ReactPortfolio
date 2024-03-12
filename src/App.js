import React from 'react';
import './assets/css/main.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Apps from './components/Apps.jsx';
import Websites from './components/Websites'


const App = () => {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
       <Route path={'/'} element={<Home />}></Route>
       <Route path={'/apps'} element={<Apps />}></Route>
       <Route path={'/web'} element={<Websites />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
