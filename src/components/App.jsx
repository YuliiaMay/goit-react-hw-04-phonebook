import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Section from "./Section/Section";
import Title from "./ContactTitle/ContactTitle";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsFilter from "./ContactsList/Filter";
import ContactsList from "./ContactsList/ContactsList";


const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const readContacts = localStorage.getItem(CONTACTS_KEY);
    const pasedContacts = JSON.parse(readContacts);

    if (pasedContacts) {
      this.setState({contacts: pasedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts))
    }
  }

  createContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  removeContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    })
  }

  handelChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value
    })
  }

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFilteredContacts();


    return (
      <Section>
        
        <ContactsForm onSubmit={this.createContact} contacts={contacts} />

        <Title text="Contacts" />
        <ContactsFilter filter={filter} onChangeFilter={this.handelChangeFilter} />
        <ContactsList contacts={visibleContacts} onRemoveClick={this.removeContact} />
      </Section>
    );
  }
};
