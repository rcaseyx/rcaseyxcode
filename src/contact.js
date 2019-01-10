import React from 'react';
import ContactForm from './contact-form';
import './contact.css';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact-me">
                <h4>Questions? Contact Me.</h4>
                <ContactForm />
            </div>
        );
    }
}
