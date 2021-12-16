import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import SidebarWrap from '../SidebarWrap'
import simg from '../../images/roundatable.jpeg'




import './style.css'

const EventSingle = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="wpo-event-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img">
                                <img src={simg} alt="" />
                                <div className="thumb-text">
                                    <span>18</span>
                                    <span>Dec</span>
                                </div>


                                
                            </div>

                            <div className="row">
                                    <div className="event-details col-12" style={{display:"flex", flexDirection:"left",width:"100%", backgroundColor:"white", justifyContent:"center", margin:"10px", width:"100%"}} >
                                    <div className='btns'>
                                        <a className='theme-btn' >Join Now</a>
                                    </div>
                                    </div>

                            </div>


                            <div className="wpo-event-details-text">
                                <h2> </h2>
                                {/* <p>The Opekete Foundation was founded by FBM as a platform to formalize her lifelong support for the education of indigent girls and other female empowerment and philanthropic activities. The Foundation was so named in honour of her father Gilbert Familusi aka Opekete. Opekete is a palm tree popularly found in Yorubaland with a poignant proverb associated with it ‘Òpèkétè ndàgbà, inú adámò ńbàjé!’. The Florence Fund is an initiative of the Foundation committed to raising N100 million to provide scholarships
                                    to promising indigent girls across Nigeria studying in the fields of teaching (STEM) and nursing.</p> */}
                                    <p>
                                        A key advocacy initiative of the Opekete Foundation, the FBM Roundtable will raise awareness and stimulate public discourse about the urgent need to educate girls, spotlighting the significant social and economic benefits that accrue when we invest in women. It will be moderated by Ms Ronke Onadeko and will feature Mr Chinenye Mba-Uzoukwu, Ms Nike Akerele-De Souza, Dr Mairo Mandara and Dr Ola Brown as distinguished speakers.
                                    </p>
                            </div>
                            <div className="wpo-event-details-wrap">
                                <div className="wpo-event-details-tab">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Event Schedule
                                            </NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Map Location
                                            </NavLink>
                                        </NavItem> */}

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                               Participate 
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <div className="wpo-event-details-content">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1" id="Schedule">
                                            <p>The event will be held under the Chairmanship of Prince Julius Adelusi-Adeluyi, Chairman, MTN Nigeria Foundation with a keynote address delivered by Dr Kayode Fayemi, Governor,
                                                Ekiti State. 10.30 am - Saturday, December 18, 2021.
                                            </p>
                                            <ul>
                                                <li>	The First Biennial FBM Roundtable on Promoting Female Education </li>
                                           
                                          
                                            </ul>
                                        </TabPane>
                                        {/* <TabPane tabId="2">
                                            <div className="contact-map enent-map">
                                                <iframe src="https://maps.google.com/maps?q=Eko%20hotel%20fantasia%20hal&t=k&z=17&ie=UTF8&iwloc=&output=embed" allowFullScreen></iframe>
                                            </div>
                                        </TabPane> */}
                                        <TabPane tabId="2">
                                            <div className="event-contact">
                                                <div className="wpo-donations-details">
                                                   <p>Join our event via our zoom link <a target="_blank" href='https://zoom.us/j/93174392736?pwd=RG9STTdQTnVPTTAyNy9RQm1JeTcwZz09'>Click</a> </p>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SidebarWrap />

                </div>
            </div>
        </div>

    );
}

export default EventSingle;




