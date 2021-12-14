import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle/about'
import Mission from '../../components/mission'
import AboutUs from '../../components/about/aboutus'
import OurFounder from '../../components/about/ourfounder'
import VedioCta from '../../components/vediocta'
import Casesection from '../../components/case2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import WorldSection from '../../components/world/aboutworldsection';


const AboutPage = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'About Us '} pagesub={'About'} />
            {/* <VedioCta/> */}
            <AboutUs />
          <WorldSection/>
            <OurFounder />
    
            {/* <Casesection/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
