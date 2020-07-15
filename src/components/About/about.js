import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (

            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>Proposito</h2>
                        <p>
                            Diseñar una estrucutura de proyecto de tipo cooperativo y colaborativo de integración institucional,
                            para brindar acompañamiento a las comunidades indígenas como agentes activos del control de su territorio.
                        </p>
                        {/* <div className="row">
                            <div className="columns contact-details">
                                <h2>Contacto</h2>
                                <p className="address">
                                    <span> <a target="”_blank”" href="https://api.whatsapp.com/send?phone=573132002676">57 3132002676</a></span><br />
                                    <span><a href="mailto:cesaran13@hotmail.com">cesaran13@hotmail.com</a></span>
                                </p>
                            </div>
                        </div> */}
                        {/* end row */}
                    </div>
                    {/* end .main-col */}
                </div>
            </section>
        );
    }
}