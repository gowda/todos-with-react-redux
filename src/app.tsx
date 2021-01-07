import React from 'react';

import { HashRouter } from 'react-router-dom';

import Header from './header';
import Main from './main';
import Footer from './footer';

export default () => (
  <HashRouter>
    <section className='todoapp'>
      <Header />
      <Main />
      <Footer />
    </section>
  </HashRouter>
);
