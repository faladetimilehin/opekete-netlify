import React from 'react'
import './worldsection.css'
import { Link } from 'react-router-dom'
import tm1 from '../../images/palmtree.jpeg'

const WorldSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-blog-area section-padding">
            {/* <div className={`wpo-world-area ${props.worldclass}`}> */}
            <div className="about-us-background">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <img src={tm1} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-world-section-about-us">
                                <div className ="wpo-world-section-about-us-content">
                                    <h2><span>" </span>Òpèkétè ndàgbà, inú adámò ńbàjé! <span>"</span></h2>
                                    <p>Opekete is a palm tree popularly found in Yorubaland with a poignant proverb associated with it <em>‘Òpèkétè ndàgbà, inú adámò ńbàjé!’</em>. </p>  <p> It literally means <em>“as the young palm tree grows and it’s fronds are out of reach, the fronds-cutter is embittered” </em>  </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            </div>
    )
}

export default WorldSection;