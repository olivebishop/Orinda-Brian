import React from 'react';
import styles from './Footer.module.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
return (
    <footer className={`${styles.footer} bg-black light padding-xlarge`} id="contact">
    <div className={`container ${styles.container}`}>
        <div className={`row ${styles['contact-information']}`}>
        <div className={`contact-detail col-md-6 ${styles['contact-detail']}`}>
            <div className={`detail mr-6 mb-4 ${styles.detail}`}>
            <ul className={`list-unstyled colored-grey text-large ${styles['list-unstyled']}`}>
                <li>Nairobi, Kenya</li>
                <li>+254 7123457943</li>
                <li>
                </li>
                <li>© 2023 Brian Orina. All rights reserved.</li>
                <li>
                Designed by: <a href="https://www.olivebishop.me" className={styles.link}>
                    Olive
                </a>
                </li>
            </ul>
            </div>
        </div>

        <div className={`col-md-6 p-0 ${styles['quick-contact']}`}>
            <div className={styles['quick-contact-inner']}>
            <h3>Quick Contact</h3>
            <form action="contact.php" className={`contact-form d-flex flex-wrap mt-4 ${styles['contact-form']}`}>
                <input type="text" name="name" placeholder="Name" className={`name mb-3 ${styles.name}`} required />
                <input
                type="text"
                name="emailPhone"
                placeholder="E-mail"
                className={`mb-3 ${styles['email']}`}
                required
                />
                <div className="pix_btn btn-click text-center mt-5">
                
                </div>
                <textarea placeholder="Message" style={{ height: '150px' }} required />
            </form>
            
            </div>
            <button type="button" onClick={() => scrollToSection("contact")} className="btn btn-pill btn-large btn-outline-light mr-3 send-btn" data-hover="click">
            <span>Send Message</span> <i className="icon icon-paper-plane"></i>
            </button>


        </div>
        </div>
    </div>
    </footer>
);
}

export default Footer;
