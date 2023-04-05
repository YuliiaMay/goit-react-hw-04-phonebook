import React from "react";
import { ContactTitle } from './ContactTitle.styled';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
    <ContactTitle>{text}</ContactTitle>
);

Title.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Title;