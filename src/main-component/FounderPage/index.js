import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle/founder'
import Mission from '../../components/mission'
import AboutUs from '../../components/about/aboutus'
import FounderInfo from '../../components/about/founderinfo'
import VedioCta from '../../components/vediocta'
import Casesection from '../../components/case2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import WorldSection from '../../components/world/aboutworldsection';


const FounderPage = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Our Founder'} pagesub={'Founder'} />
            {/* <VedioCta/> */}
            
            <FounderInfo />
            {/* <Casesection/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FounderPage;
