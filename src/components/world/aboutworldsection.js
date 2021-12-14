import React from 'react'
import './worldsection.css'
import tm1 from '../../images/palmtree.jpeg'


const WorldSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-blog-area">
            {/* <div className={`wpo-world-area ${props.worldclass}`}> */}
            <div className="about-us-background">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 colsm-12">
                            <img src={tm1} alt="" />
                        </div>
                        <div className="col-lg-7 col-md-12 colsm-12">
                            <div className="wpo-world-section-about-us">
                                <div className ="wpo-world-section-about-us-content">
                       
                                <span style={{color: "#f8bbd0"}}>Our Story</span>
  
                                    <h2>“Òpèkétè ndàgbà, inú adámò ńbàjé!”</h2>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p>Opekete is a palm tree popularly found in Yorubaland with a poignant proverb associated with it <em>‘Òpèkétè ndàgbà, inú adámò ńbàjé!’</em>. </p>  <p> It literally means <em>“as the young palm tree grows and it’s fronds are out of reach, the fronds-cutter is embittered”. </em> 
                                    <br/>This name was very dear to our founder read her story below </p>
                            
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