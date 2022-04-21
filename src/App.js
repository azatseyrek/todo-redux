import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </div>
  );
};

export default App;
