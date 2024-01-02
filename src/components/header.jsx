import React from 'react';
import Logo from '../Assets/Images/Frame.jpeg';
import header from '../Assets/css/header.css'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='body'>
                <nav className='header'>
                    <a class="navbar-brand" href="#">density</a>
                    <div className='nav-items'>
                        <ul className="list-items">
                            <li className="item">
                                <a class="nav-link" href="#">Career</a>
                            </li>
                            <li className="item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li className="item">
                                <a class="nav-link" href="#">LeaderBoard</a>
                            </li>
                            <li className="item">
                                <a class="nav-link" href="#">Fees</a>
                            </li>
                            <li className="item">
                            <button className='button' id='btn' type="submit">TRADE NOW</button>
                            </li>
                        </ul>
                        
                      
                    </div>
                </nav>
            </div>

        )
    }
}

export default Header;
