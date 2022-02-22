import React from 'react'
import abimg from '../../images/eventt.png'
import VideoModal from '../ModalVideo'
import './style.css'

const Event = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);

    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row" >
                    <div className="col-lg-5 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} alt=""  height='400'/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Event</span>
                                <h2> Enduring Legacy </h2>
                            </div>
                            <p>'Enduring Legacy’ is an event created in tribute to our founder, Mrs. Florence Bamidele Makanjuola - FBM’s posthumous 100th birthday It celebrates this momentous milestone spotlighting the key themes in Florence’s life.
                                {/* - dedication to God, love and sacrifice for family and humanity, hard-work, diligence, selfless service to the community and triumph against many odds. */}
                            </p>
                            <p>The event will be held under the Chairmanship of Prince Julius Adelusi-Adeluyi, Chairman, MTN Nigeria Foundation with a keynote address delivered by Dr Kayode Fayemi, Governor,
                                Ekiti State.
                                <ol>
                                    <li>	The First Biennial FBM Roundtable on Promoting Female Education </li>
                                    <li>Launch & Fundraiser for the Florence Fund, an initiative of the Opekete Foundation </li>
                                    <li>	Pre-launch of an Autobiography of FBM’s Inspiring Life of Service </li>

                                </ol>
                            </p>

                            <div className="btns">
                                <a href="https://linktr.ee/opeketefoundation" className="theme-btn" onClick={ClickHandler}>Event Details</a>
                                {/* <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Event;