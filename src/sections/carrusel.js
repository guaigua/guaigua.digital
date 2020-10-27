import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import validation from 'utils/validation';

const Carrusel = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutCarrusel {
                edges {
                    node {
                        id
                        heading
                        description {
                            description
                        },
                        image {
                            fluid(quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutCarrusel.edges.find(edge => edge.node.id === contentModuleId);

    useEffect(() => {
        validation.init();
    },[]);

    return (
        <section id="carrusel" className="carrusel container section mx-auto">
            <div className="carrusel__content">
                <h2 className="section__title" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.heading }</h2>
                <p className="mb-4 w-full md:w-3/4" data-sal="slide-up" data-sal-easing="ease-in-cubic">{ content.node.description.description }</p>
                <form id="carrusel_form" className="w-full md:w-3/4" noValidate data-sal="slide-up" data-sal-easing="ease-in-cubic" data-sal-delay="100">
                    <div className="input-group mb-2">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" className="input" name="name" />
                    </div>
                    <div className="input-group mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="input" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" className="h-20" name="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn--primary mt-8">Enviar</button>
                </form>
            </div>
            <div className="carrusel__image">
                <div className="mx-auto" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500">
                    <div className="carrusel__image-wrap">
                        <Img fluid={ content.node.image.fluid } alt="carrusel" />
                    </div>
                </div>
            </div>
        </section>   
    );
};

Carrusel.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Carrusel;