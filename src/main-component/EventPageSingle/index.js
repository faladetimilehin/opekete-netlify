import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import EventSingle from '../../components/EventSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const EventPageSingle =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Florence Bamidele Makanjuola Roundtable'} pagesub={'FBM Roundtable'}/> 
            <EventSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPageSingle;
