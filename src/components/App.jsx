import React from 'react';
import { Menu } from './Menu';
import { Buttons } from './Buttons.jsx';
import { Footer } from './Footer';

import '../stylesheets/App.scss';

function App() {
  return (
    <>
      <main className="main-app">
        <Menu />
        <Buttons />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
