import React from "react";
import { Contact, DeleteContactBtn } from "./ContactsList.styled";


const ContactsList = ({ contacts, onRemoveClick }) => (
    <ul>
        {
            contacts.map(({ id, name, number }) => {
                return (
                    <Contact key={id}>
                        <span>{name}</span>
                        <span>{number}</span>
                        <DeleteContactBtn
                            type="button"
                            onClick={() => {
                                onRemoveClick(id);
                            }}
                        >❌</DeleteContactBtn>
                    </Contact>
                )
            })
        }
    </ul>
) 

export default ContactsList;