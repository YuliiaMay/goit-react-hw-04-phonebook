import React from "react";
import { FilterBlock } from "./Filter.styled";
import PropTypes from 'prop-types';


const ContactsFilter = ({filter, onChangeFilter}) => (
    <FilterBlock>
        <label htmlFor="contacts-filter">Find contacts by name</label>
        <input 
            id='contacts-filter'
            type="text"
            value={filter}
            onChange={onChangeFilter}
        />
    </FilterBlock>
)

ContactsFilter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}


export default ContactsFilter;