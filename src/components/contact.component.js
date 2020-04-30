import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Iframe from 'react-iframe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this
            .onChangeName
            .bind(this);
        this.onChangeEmail = this
            .onChangeEmail
            .bind(this);
        this.onChangeMessage = this
            .onChangeMessage
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
    }
    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }
    onChangeMessage(e) {
        this.setState({message: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        alert('Your message has been sent!')

        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return (

            <div>
                <div className="form-wrapper">
                    <h2>Contact Me!</h2>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.onChangeName}/>
                        </Form.Group>

                        <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.email}
                                onChange={this.onChangeEmail}/>
                        </Form.Group>

                        <Form.Group controlId="Message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                type="text"
                                value={this.state.message}
                                onChange={this.onChangeMessage}/>
                        </Form.Group>

                        <Button variant="danger" size="lg" block="block" type="submit">
                            Submit message
                        </Button>

                    </Form>
                </div>
                <div><Iframe
                    url="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;coord=52.213820299999995,21.1609132&amp;q=VIII%20Poprzeczna%202A%2F64%2C%20Warszawa%2C%20Polska+(Kino%20V%C3%A9rit%C3%A9)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
                    width='100%'
                    frameBorder="0"
                    scrolling="no"/></div>
                <div className="address-container">
                    <div>
                        <FontAwesomeIcon icon="location-arrow" />
                        <h3>Adres:</h3>
                        <h4>VIII Poprzeczna 2A/64, Warszawa</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="envelope" />
                        <h3>E-mail:</h3>
                        <h4><a href="mailto:pmmagusiak@gmail.com?subject=Blog%20matters" target="_blank" rel="noopener noreferrer"> pmmagusiak@gmail.com</a></h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="phone-square" />
                        <h3>Telefon:</h3>
                        <h4>500 890 520</h4>
                    </div>

                </div>
            </div>
        );
    }
}