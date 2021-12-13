import React from 'react'
import './style.css'


//style .css has the backgpround color change to 11 
const FounderTitle = (props) => {
    return(
        <div className="wpo-breadcumb-founder">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderTitle;