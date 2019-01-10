import React from 'react';
import './contact-form.css';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            loading: false,
            submitted: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const finalMessage = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        console.log(finalMessage);
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit} id="form-contact">
                <label htmlFor="name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    onChange={this.handleNameChange}
                    required
                />
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    onChange={this.handleEmailChange}
                    required
                />
                <label htmlFor="message">
                    Message:
                </label>
                <textarea
                    id="message"
                    form="form-contact"
                    onChange={this.handleMessageChange}
                    required
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}
