import React from "react";
import { Wrapper } from "./Section.styled";
import PropTypes from 'prop-types';

const Section = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

Section.propTypes = {
    children: PropTypes.array.isRequired,
}

export default Section;