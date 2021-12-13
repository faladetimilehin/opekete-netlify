import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },
    {
        id: 2,
        title: 'About Us',
        link: '/about',
        submenu: [
            {
                id: 79,
                title: 'Our Mission',
                link: '/donate'
            },
            {
                id: 80,
                title: 'Our Founder',
                link: '/volunteer'
            },
          
            {
                id: 81,
                title: 'What We Do',
                link: '/donate'
            },
            {
                id: 82,
                title: 'Our Story',
                link: '/volunteer'
            },           
        ]
    },
{
    id: 3,
        title: 'FBM Roundtable',
        link: '/event-details',
    },
{
    id: 4,
        title: 'Scholarships',
        link: '/apply',
    },

{
    id: 5,
        title: 'Scholarships',
        link: '/apply',
    },
    {
        id: 6,
            title: 'Donate',
            link: '/donate',
        },
    {
        id: 7,
        title: 'Get Involved',
        link: '/volunteer',
    },

]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link to={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
