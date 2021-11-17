import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {Header} from './components'
import {Home, Cart} from './pages';

function App (){



  return (
    <div className="wrapper">
      <Header/>
        <main className="content">
        <Routes>

          <Route exact path="/" element={<Home/>  } />
          <Route exact path="/cart" element={<Cart />} />


        </Routes>


        </main>
    </div>
  );
}

export default App;