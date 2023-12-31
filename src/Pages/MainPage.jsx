import React from 'react';
import Header from '../Component/Header';
import Section1 from '../Component/Section1';
import AboutUsPage from '../Component/Section2';
import Skills from '../Component/Skills';
import ProjectsDesc from '../Component/ProjectsDesc';
import Footer from '../Component/Footer';
//import ImageMasonry from '../Component/ImageMasonry';

export default function MainPage() {
    return (
        <>
        <Header />
        <Section1 />
        <AboutUsPage />
        <Skills />
        <ProjectsDesc />
        <Footer />
        </>
    )
}
