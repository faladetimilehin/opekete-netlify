import React, { useEffect, useState } from 'react'
import './style.css'
import hero1 from '../../images/slider/shape.png'
import VideoModal from '../ModalVideo'
import { Link } from 'react-router-dom'
import useWindowSize from '../../helpers/useWindowSize'
import {Slide} from "@material-ui/core"
const Hero = (props) => {
    const [isSlide, seIsSlide] = useState(false)
    const setSlideIn =()=>{
    return setTimeout(()=>seIsSlide(true),950);
    }
        useEffect(()=>{
            setSlideIn()
        })
    const [windowWidth, windowHeight] = useWindowSize();
    console.log({windowWidth, windowHeight});
    return (
        <section className="hero hero-style-2">
            <div className="hero-slider" >
                <div className="slide">
                {
                    windowWidth >= 1024 && (
                        <div className="left-vec col col-lg-6 col-sm-12 col-m-12" >
                        <div className="row">
                            <Slide in={isSlide} direction="right" >
                                <div> 
                                <div className="slide-title" >
                                    {/* <h2> Female Education and Empowerment<span>Education</span></h2> */}
                                    <h2>Empowering <br />The Next Generation <br />of Female Leaders</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Promoting self-dependence amongst females through <br /> education advocacy, and empowerment</p>
                                    {/* <p>You Can Satisfied Yourself By Helping.</p> */}
                                </div>
                                <div className="btns">
                                    <Link to="/about" className="theme-btn">About Us</Link>
                                    {/* <ul>
                                        <li className="video-holder">
                                            <VideoModal/>
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul> */}
                                </div>
                                </div>
                            </Slide>                        

                        </div>

                    </div>
                    )
                }
                    {
                        windowWidth < 1024 && (
                            <div className="container" >
                        <div className="row" style={{overflow :"visible" }}>
                            <div className="col col-lg-6 col-sm-12 col-m-12 slide-caption" > 
                                <div className="slide-title">
                                   
                                    <h2>Empowering <br />The Next Generation <br />Of Women And Girls</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Promoting self-dependence amongst females through education  advocacy, and empowerment</p>
                                    
                                </div>
                                <div className="btns">
                                    <Link to="/about" className="theme-btn">About Us</Link>
                                    
                                </div>
                            </div>                        

                        </div>

                    </div>
                        )
                    }
              
    {/* height: 100%;
    padding: 1rem; 
    display: flex;
    flex-direction: column;
    margin: auto; 
    justify-content: center; */}

                    <div
                    style={windowWidth === 1024 ? {
                        height: '608px',
                        right: 0,
                    } : {}}
                    className="right-vec col col-lg-6 col-sm-12 col-m-12">

                    </div>
                </div>
            </div>
            <div className="hero-shape" >
                <img src={hero1} alt="" />
            </div>
        </section>
    )
}

export default Hero;