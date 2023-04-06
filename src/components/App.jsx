import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Section from "./Section/Section";
import Title from "./ContactTitle/ContactTitle";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsFilter from "./ContactsList/Filter";
import ContactsList from "./ContactsList/ContactsList";


const CONTACTS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem(CONTACTS_KEY)) ??
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
  }, [contacts]);

  const createContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    setContacts(prevState => [contact, ...prevState] )
  }

  const removeContact = (id) => {
    setContacts(prevState => contacts.filter(contact => contact.id !== id) )
  }

  const handelChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  const visibleContacts = getFilteredContacts();

  return (
    
      <Section>
        
        <ContactsForm onSubmit={createContact} contacts={contacts} />

        <Title text="Contacts" />
        <ContactsFilter filter={filter} onChangeFilter={handelChangeFilter} />
        <ContactsList contacts={visibleContacts} onRemoveClick={removeContact} />
      </Section>
    );
};
