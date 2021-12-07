import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Mission from '../../components/mission'
import About from '../../components/about'
import VedioCta from '../../components/vediocta'
import Casesection from '../../components/case2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const AboutPage = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'About Us '} pagesub={'About'} />
            {/* <VedioCta/> */}
            <About />
            <Mission subclass={'section-padding'} />
            {/* <Casesection/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
