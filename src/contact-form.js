import React from 'react';
import {API_BASE_URL} from './config';
import Loader from 'react-loader-spinner';
import './contact-form.css';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            loading: false,
            submitted: false,
            error: false
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

    apiSent() {
        this.setState({loading: true});
    }

    apiSuccess(res) {
        this.setState({
            loading: false,
            submitted: true
        });
    }

    apiError(err) {
        this.setState({
            loading: false,
            error: true
        });
        console.log(err);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.apiSent();
        const finalMessage = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        return fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finalMessage)
        })
            .then(res => this.apiSuccess(res))
            .catch(err => this.apiError(err));
    };

    render() {
        if (this.state.loading) {
            return (
                <div className="form-container">
                  <Loader
                    type="RevolvingDot"
                    color="#D0DCE0"
                    height="100"
                    width="100"
                  />
              </div>
            );
        } else if (this.state.submitted) {
            return (
                <div className="form-container">
                    Thanks for reaching out! I'll get back to you ASAP.
                </div>
            )
        } else if (this.state.error) {
            return (
                <div className="form-container">
                    Oh no! Something went wrong. Please reload the page and try again.
                </div>
            )
        }
        return (
          <div className="form-container">
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
            </div>
        );
    }
}
