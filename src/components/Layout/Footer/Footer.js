import React from 'react'
import './Footer.scss'
import Config from '../../../config/config.json'

export default function Footer(){
    const shipmentIcon = Config.footer.truckIcon;
    const paymentIcon = Config.footer.paymentIcon;
    const supportIcon = Config.footer.supportIcon;
    const chatWithUs = Config.footer.chatWithUs;

    return(
        <footer>
            <div className="footer-container">
                <div className="footer-div-1">
                    <div className="footer-element">
                        <img className="footer-icons" src={shipmentIcon} alt="shipement-icon"></img>
                        <h5 className="main-text">Free Delivery (above ₹70)</h5>
                        <span className="sub-text">Delivery happens within 3-5 days</span>
                    </div>
                    <div className="footer-element">
                        <img className="footer-icons" src={paymentIcon} alt="paymentIcon-icon"></img>
                        <h5 className="main-text">Payment Options</h5>
                        <span className="sub-text">Cash on Delivery & Online Payment</span>
                    </div>
                    <div className="footer-element">
                        <img className="footer-icons" src={supportIcon} alt="supportIcon-icon"></img>
                        <h5 className="main-text">Customer Support</h5>
                        <span className="sub-text">buyersupport@mydukaan.io</span>
                    </div>
                </div>
                <div className="store-details">
                    Store details
                    <h5>Kota's Kachoriss</h5>
                    <address>August 1501,Bda Complex,Hsr Layout, Outer Ring Rd, HSR Layout, Bengaluru, Karnataka 560102, India</address>
                    <img className="pd-10" src={chatWithUs} alt="chatWithUs-icon"></img>
                </div>
                <div className="footer-links-section">
                        <a className="footer-link" href="/">Refund and Returns</a>
                        <a className="footer-link" href="/">Privacy Poclicy</a>
                        <a className="footer-link" href="/">Terms and Conditions</a>
                </div>
            </div>
        </footer>
        
    )
}