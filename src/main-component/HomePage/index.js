import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import Mission from '../../components/mission'
import Event from '../../components/about/event'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import EventSection from '../../components/event'
import CtaSection from '../../components/cta'
import WorldSection from '../../components/world'
import Highlights from '../../components/Highlight/index'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            <Event/>
           
            <Mission/>
            <About/>
            {/* <CaseSlide/>
            <CounterSection/> */}
            {/* <TeamSection/> */}
        
            <Highlights/>
            <WorldSection/>
            {/* <EventSection/> */}
            {/* <CtaSection/> */}
            {/* <BlogSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;