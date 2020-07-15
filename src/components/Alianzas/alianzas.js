import React, { Component } from 'react';
import './alianzas.css';
export default class Resume extends Component {
    render() {
        return (

            <section id="alianzas" >
                <h1 className="gestores">ALIANZAS</h1>
                <div  className="container">

                    <br></br>
                    <div className="card" id="cf">
                        <br></br>
                        <br></br>
                        <img className="top" src="images/alianzas/etnollano.png" />
                        <div className="bottom"><p>Diseñar una estrucutura de proyecto de tipo cooperativo y colaborativo de integración institucional,
                         para brindar acompañamiento a las comunidades indígenas como agentes activos del control de su territorio.</p></div>
                    </div>
                    <div className="card" id="cf">
                        <br></br>
                        <br></br>
                        <img className="top" src="images/alianzas/unidos.png" />
                        <div className="bottom"><p>Diseñar una estrucutura de proyecto de tipo cooperativo y colaborativo de integración institucional,
                        para brindar acompañamiento a las comunidades indígenas como agentes activos del control de su territorio.</p></div>
                    </div>
                    <div className="card" id="cf">
                        <br></br>
                        <br></br>
                        <img className="top" src="images/alianzas/amano.png" />
                        <div className="bottom"><p>Diseñar una estrucutura de proyecto de tipo cooperativo y colaborativo de integración institucional,
                         para brindar acompañamiento a las comunidades indígenas como agentes activos del control de su territorio.</p></div>
                    </div>
                </div>
            </section>
        );
    }
}