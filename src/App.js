import React from 'react';

import styles from './App.module.scss';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

import { getProjects } from './projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const data = getProjects();

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Landing />
      <About />
      <Skills />
      <Work data={data} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
