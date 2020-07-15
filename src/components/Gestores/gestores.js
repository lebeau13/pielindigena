import React, { Component } from 'react';
import './cards.css';
export default class Gestores extends Component {
    render() {
        return (
            <section id="gestores">
                <h1 className="gestores">GESTORES</h1>
                <div className="container">
                    <div className="card">
                        <h1 className="titulo">JOHANNA VELANDIA</h1>
                        <img alt="" src="images/gestores/johana.png" />
                        <p>Johanna Velandia es diseñadora industrial de la universidad Jorge Tadeo Lozano, Magister en docencia en énfasis en investigación. Con experienca académica enfocada en la dirección de Proyectos de grado.</p>
                    </div>
                    <div className="card">
                        <h1 className="titulo">LUIS VELANDIA</h1>
                        <img alt="" src="images/gestores/luis.png" />
                        <p>JLuis Velandia es medico anestesiólogo; egresado de la Universidad Militar Nueva Granada. Artista plastico, poeta. Publicado en antologia de poesia en el cine “con el Festival de cine de Bogotá y Editorial Escarabajo 2019.</p>
                    </div>
                    <div className="card">
                        <h1 className="titulo">ANDRÉS ALARCÓN</h1>
                        <img alt="" src="images/gestores/andres.png" />
                        <p>Andrés Alarcón es un artista plastico Colombiano nacido en Bogotá, profesor en la Escuela de Artes Guerrero que se proyecta como una promesa de la pintura figurativa contemporanea.
                            Le atrae el realismo y sentir como se transforman las cosa que observa mientras pinta sobre el lienzo, y asi generar un acercamiento para crear una ilusión.</p>
                    </div>
                </div>

            </section>
        );
    }
}