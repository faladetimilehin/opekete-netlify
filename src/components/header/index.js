import React from 'react'
import Logo from '../../images/logo.png'
import {NavLink, Link}  from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
// import {NavLink} from 'react-router-dom'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header header-style-3">
        {/* <HeaderTopbar/> */}
        <div className = "container">
            <div className="header-content">
            <div className="row h-reponse" style={{justifyContent:"space-between",}}>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="logo">
                        {/* <h1 style={{ color: 'pink', fontWeight: 'bold' }}>Opeteke</h1> */}
                        <Link  to="/home" title=""><img src={Logo} alt=""/> </Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block  d-none">
                    <nav>
                        <ul>
                            {/* <li><NavLink exact activeClassName = "active" to="/home" title="">Home</NavLink></li> */}
                            <li><NavLink activeClassName = "active"  to="/about" title="">About Us</NavLink>
                            <ul>
                                    <li><Link to="/about" title="">Our Story</Link></li>
                                    <li><Link to="/founderinfo" title="">Our Founder</Link></li>
                                    <li><a href="http://www.opeketefoundation.org/" title="">Get Inspired</a></li>
                                    {/* <li><Link to="/What-We-Do" title="">Our Story</Link></li> */}
                                    <li><Link to="/What-We-Do" title="">Our Trustees</Link></li>
                                </ul>
                                </li>
                                <li><NavLink activeClassName = "active" to="/event-details" title="">FBM Roundtable</NavLink>
  
  </li>
                            <li><NavLink activeClassName = "active" to="apply" title="">Scholarships </NavLink>
                                {/* <ul>
                                    <li><Link to="/apply" title="">How To Apply</Link></li>
                                    <li><Link to="/case-single" title="">Frequently Asked Questions</Link></li>
                                </ul> */}
                            </li>
                         
                            <li><NavLink activeClassName = "active" to="/volunteer" title="">Get Involved</NavLink>  </li>
                            <li><NavLink activeClassName = "active" to="/donate" title="">Donate</NavLink></li>
                         
                            {/* <li><Link to="/home" title="">Pages</Link>
                                <ul>
                                 <li><Link to="/about" title="">About</Link></li>
                                    <li><Link to="/donate" title="">Donate</Link></li>
                                    <li><Link to="/volunteer" title="">Volunteer</Link></li> 
                                    <li><Link to="/404" title="">Error 404</Link></li>
                                </ul>
                            </li> */}
                            {/* <li><NavLink activeClassName = "active" to="/blog">Latest News</NavLink>
                                <ul>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/blog-left">Blog Left sidebar</Link></li>
                                    <li><Link to="/blog-fullwidth">Blog full width</Link></li>
                                    <li><i className="fa fa-angle-right"></i><Link to="/blog-details" title="">Blog Details</Link>
                                        <ul>
                                            <li><Link to="/blog-details" title="">Blog single</Link></li>
                                            <li><Link to="/blog-details-left" title="">Blog single Left sidebar</Link></li>
                                            <li><Link to="/blog-details-fullwidth" title="">Blog single full width</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li><Link to="/contact" title="">Contact</Link></li> */}
                        </ul>
                    </nav>
                </div>
                {/* <div className="col-lg-2 col-md-6 col-sm-6 col-6" style = {{background: 'red'}}>
                </div> */}
                {/* <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                    <div className="contact">
                        <div className="cart-search-contact">
                            <div className="header-search-form-wrapper">
                                <button className="search-toggle-btn"><i className="fi flaticon-magnifying-glass"></i></button>
                                <div className="header-search-form">
                                    <form onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search here..."/>
                                            <button type="submit"><i className="ti-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div> */}
                <div className="col-md-3 col-sm-3 col-3">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;