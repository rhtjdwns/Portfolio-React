import React from "react";
import { contactText } from "../constants/data"

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                        <div>
                            {contactText.map((contact, key) => (
                                <div key={key}>
                                    <a
                                        href={contact.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {contact.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;