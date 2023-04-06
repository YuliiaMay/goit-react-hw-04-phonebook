import { useState } from "react";
import { Form, Title, ContactFormLabel, ContactInput, AddContactBtn } from "./ContactsForm.styled";
import PropTypes from 'prop-types';

const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // state = {
    //     name: '',
    //     number: ''
    // }

    const handleChange = ({ target: { value, name } }) => {
        console.log(value);
        console.log(name);

        switch(name) {
            case 'name':
                setName(value);                
                break;
            
            case 'number':
                setNumber(value);                
                break;   
            
            default:
                break;
        }
    }

    // handleChange = ({ target: { value, name } }) => {
    //     this.setState({
    //         [name]: value
    //     })
    // }
    // console.log(contacts);

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        //     return alert(`${name} is already in contacts.`);
        // } else if (contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase())) {
        //     return alert(`This number is already in contacts.`);
        // }
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { name, number } = this.state;
    //     const { contacts } = this.props;
        
    //     if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    //         return alert(`${name} is already in contacts.`);
    //     } else if (contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase())) {
    //         return alert(`This number is already in contacts.`);
    //     }

    //     this.props.onSubmit({
    //         name: name,
    //         number: number
    //     });
    //     this.reset();
    // }

    // reset = () => {
    //     this.setState({
    //         name: '',
    //         number: ''
    //     });
    // };

    // render() {
    return (
        <Form onSubmit={handleSubmit}>
            <Title>Phonebook</Title>
            <ContactFormLabel htmlFor="contact-name">Name</ContactFormLabel>
            <ContactInput
                id="contact-name"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
            />
            

            <ContactFormLabel htmlFor="contact-number">Number</ContactFormLabel>
            <ContactInput
                id="contact-number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
            />
            

            <AddContactBtn type="submit">
                ADD
            </AddContactBtn>
        </Form>            
    )
}
    

ContactsForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default ContactsForm;