import { useInView } from 'react-intersection-observer';
import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

function Contact({language}) {
    const { ref: contactRef, inView: contactIsVisible } = useInView({
        triggerOnce: true,
    });
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        if (email && name && message) {
            axios
                .post("http://localhost:3001/contact", {
                    name: name,
                    email: email,
                    message: message,
                })
                .then(() => alert('Message Sent Sucessfully'))
                .catch(() => alert("Ooopsy daisssy !"));
            return;
        }
        return alert("Fill in all the fields to continue");
    };

    return (
        <div className="contact" id="contact">
            <div className="contact--separator"></div>
            {language === 'en' ? 
            <div className="contact--container">
                <h1 ref={contactRef} className={`${'contact--title'} ${contactIsVisible ? 'animateFadein' : ''}`}>CONTACT</h1>
                <div ref={contactRef} className={`${'contact--form-container'} ${contactIsVisible ? 'animateFadeinDelay' : ''}`}>
                    <p ref={contactRef} className={`${'contact--description'} ${contactIsVisible ? 'animateFadein' : ''}`}>
                        Whether you have a question or just want to say hi, please don't hesitate !
                    </p>
                    <form className="contact--form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            onChange={(event) => setName(event.target.value)}
                            className="contact--form-input"
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            onChange={(event) => setEmail(event.target.value)}
                            className="contact--form-input"
                        />
                        <textarea
                            id="message"
                            placeholder="Type your message here..."
                            rows="5"
                            onChange={(event) => setMessage(event.target.value)}
                            className="contact--form-textarea"
                        ></textarea>
                        <div>
                            <button className="contact--form-submit" type="submit">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div> :
            <div className="contact--container">
                <h1 ref={contactRef} className={`${'contact--title'} ${contactIsVisible ? 'animateFadein' : ''}`}>CONTACT</h1>
                <div ref={contactRef} className={`${'contact--form-container'} ${contactIsVisible ? 'animateFadeinDelay' : ''}`}>
                    <p ref={contactRef} className={`${'contact--description'} ${contactIsVisible ? 'animateFadein' : ''}`}>
                        N'hésitez pas à me contacter !
                    </p>
                    <form className="contact--form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            onChange={(event) => setName(event.target.value)}
                            className="contact--form-input"
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            onChange={(event) => setEmail(event.target.value)}
                            className="contact--form-input"
                        />
                        <textarea
                            id="message"
                            placeholder="Type your message here..."
                            rows="5"
                            onChange={(event) => setMessage(event.target.value)}
                            className="contact--form-textarea"
                        ></textarea>
                        <div>
                            <button className="contact--form-submit" type="submit">
                                ENVOI
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            }
            <div className='contact--footer'>
                <div className="contact--footer-links">
                    <a className="contact--footer-link" href="https://www.linkedin.com/in/mizukiikeda/" target="_blank">
                        <img className="contact--footer-logo" src="/images/logo_linkedin.png" alt="logo_linkedin" />
                    </a>
                    <a className="contact--footer-link" href="https://github.com/Mizuki-IKEDA" target="_blank">
                        <img className="contact--footer-logo" src="/images/logo_github.png" alt="logo_github" />
                    </a>  
                    <a className="contact--footer-link" href="mailto:">
                        <img className="contact--footer-logo" src="/images/logo_mail.png" alt="logo_mail" />
                    </a>  
                </div>
                <p>
                    Designed and Build by<span className='contact--footer-name'> Mizuki Ikeda</span>
                </p>
            </div>
        </div>
    )
}

Contact.propTypes = {
    language: PropTypes.string.isRequired,
};

export default Contact;