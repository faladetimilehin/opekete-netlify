import React from 'react';
import {Link} from 'react-router-dom'



const SidebarWrap = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                {/* <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                {/* <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Many Children are suffering a lot for food.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be kind for the poor people and the kids.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be soft and kind for the poor people.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                    <li><Link to="/donate">Donations</Link></li>
                        <li><Link to="/donate">Charity</Link></li>
                        <li><Link to="/founderinfo">Our Founder</Link></li>
                        <li><Link to="/donate">Non Profit</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default SidebarWrap;
