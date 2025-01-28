
import { useState } from 'react';
import ContactForm from '../../pages/contactform';
import '../../styles/footer.css';
import footerlogo from '../../assets/footer-logo.png'

function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (

        <footer className="footer-container-section">
            <div className="footer-container">
                <div className="footer-project">
                    <h2>Have a challenging project for us?</h2>
                </div>
                <div className='footer-btn'>
                    <button className="footer-contact-btn" onClick={() => setIsModalOpen(true)}>Get in touch</button>
                </div>

                <div className="footer-contact">
                    <img src={footerlogo} alt='footer-logo'></img>
                    <h1>
                        Disha Vision Architects & Planners <br />
                        Plot No. 12, Vision Tower, <br />
                        Central Avenue Road, <br />
                        Amravati, Maharashtra - 444601 <br />
                        India
                    </h1>
                </div>

                <div className="footer-web">
                    <div className='footer-p'>
                        <p>Website Design © 2024 Disha Vision Ltd.</p>
                    </div>
                    <div className='footer-p'>
                        <p>Privacy policies and cookies</p>
                    </div>
                </div>

            </div>
            {isModalOpen && (
                <div>
                    <div className="modal-container">
                        <ContactForm onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>
            )}
        </footer>

    );
}

export default Footer;
