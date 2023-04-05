import styled from "styled-components";

export const Phonebook = styled.ul`
    // display: flex;
    // flex-direction: column;
    
`;

export const Contact = styled.li`
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
        margin-bottom: 12px;
    }
`

export const DeleteContactBtn = styled.button`
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 1px solid #0070A0;
    cursor: pointer;
`