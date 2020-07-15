import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Alianzas from './components/Alianzas/alianzas';
import Portfolio from './components/Portfolio/portfolio';
import Testimonials from './components/Testimonials/testimonials';
import Footer from './components/Footer/footer';
import Gestores from './components/Gestores/gestores';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Gestores />        
        <Testimonials />
        <Alianzas />
        <Portfolio />
        <Testimonials />        
        <Footer />
      </div>
    );
  }
}
export default App;