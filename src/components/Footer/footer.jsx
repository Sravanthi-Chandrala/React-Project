import React from "react";
import Logo from '../Footer/Images/footer-logo.png';
import '../Footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
function Footer(){
    return(
        <div className="footer-part">
            <img src={Logo} alt="Logo"/>
            <div className="footer-content">
                <ul className="list">
                    <li>Blog</li>
                    <li>Fees</li>
                    <li>Leaderboard</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                <p className="p">Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
            </div>
            <div className="social-icon">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>

        </div>
    )
}
export default Footer;