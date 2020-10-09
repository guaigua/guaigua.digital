import React from 'react';
import PropTypes from "prop-types";
import Hero from 'sections/hero';
import Carrusel from 'sections/carrusel';
import About from 'sections/about';
import Testimonials from 'sections/testimonials';
import Services from 'sections/services';
import Pricing from 'sections/pricing';
import Contact from 'sections/contact';
import PageNotFound from 'sections/pageNotFound';


// Dynamically import or require sections inside the section folder
const components = {
    Hero,
    Carrusel,
    About,
    Testimonials,
    Services,
    Pricing,
    Contact,
    PageNotFound
};

const Section = ({ contentModuleId, type }) => {
    
    const component = type.split('Layout')[1];
    console.log(components[component] );
    if (typeof components[component] === 'undefined') {
        return '';
    }

    return React.createElement(components[component],{
        contentModuleId
    });
}

Section.prototype = {
    contentModuleId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Section;
