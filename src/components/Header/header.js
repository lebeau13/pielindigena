import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (

      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">INICIO</a></li>
            <li><a className="smoothscroll" href="#gestores">GESTORES</a></li>
            <li><a className="smoothscroll" href="#alianzas">ALIANZAS</a></li>            
            <li><a className="smoothscroll" href="#portfolio">ARTISTAS</a></li>
            <li><a className="smoothscroll" href="#portfolio">EVENTO</a></li>

          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Piel Indigena</h1>
            <h3>Ingeniero de Sistemas</h3>
            <hr />
            <ul className="social">
              <li>
                <a target="”_blank”" href="https://www.facebook.com/piel.indigena.9"><i className="im im-facebook"/></a>
              </li>
              <li>
                <a target="”_blank”" href="https://www.instagram.com/colombiapielindigena/"><i className="im im-instagram"/></a>
              </li>
              <li>
                <a target="”_blank”" href="https://api.whatsapp.com/send?phone=573132002676"><i className="im im-whatsapp" /></a>
              </li>
              <li>
                <a target="”_blank”" href="mailto:colombiapielindigena@gmail.com"><i className="im im-newsletter"/></a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="im im-angle-down" /></a>
        </p>
      </header>
    );
  }
}