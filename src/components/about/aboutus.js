import React from 'react'
import abimg from '../../images/about3.png'
import './style.css'

const AboutUs = (props) => {
   
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>A World of Opportunity For Women and Girls </h2>
                            </div>
                            <p>Opekete Foundation seeks to create a world of opportunities for women and girls to prosper regardless of their starting point in life.<br/><br/>
                            We believe that with access to education, financial services, and skills training, all women can be empowered for success.<br/><br/>
                                Our focus is empowering young girls in Nigeria to a better life through education and financial literacy. </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;