import React, { Component } from "react";
import { Form, Title, ContactFormLabel, ContactInput, AddContactBtn } from "./ContactsForm.styled";
import PropTypes from 'prop-types';

class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const { name, number } = this.state;
        const { contacts } = this.props;
        
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            return alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase())) {
            return alert(`This number is already in contacts.`);
        }

        this.props.onSubmit({
                name: name,
                number: number
        });

        this.reset();
    }


    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Title>Phonebook</Title>
                <ContactFormLabel htmlFor="contact-name">Name</ContactFormLabel>
                <ContactInput
                    id="contact-name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                />
                

                <ContactFormLabel htmlFor="contact-number">Number</ContactFormLabel>
                <ContactInput
                    id="contact-number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                

                <AddContactBtn type="submit">
                    ADD
                </AddContactBtn>
            </Form>            
        )
    }
}
    

ContactsForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default ContactsForm;