import styled from "styled-components";

export const Form = styled.form`
    border: 2px solid #fff;
    background-color: #FAE173;
    padding: 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 600;
    color: #0070A0;    
`;

export const ContactFormLabel = styled.label`
    font-size: 12px;
    color: #0070A0;
`;

export const ContactInput = styled.input`
    margin-bottom: 16px;
    // height: 40px
    // border-radius: 20px;
    background-color: transparent;
    border: 2px solid #0070A0;

    &:hover,
    &:focus {
        border: 2px solid #0070A0;
        box-shadow: 4px 2px 1px 1px #0070A0;
    }
`;

export const AddContactBtn = styled.button`
    height: 26px;
    background-color: transparent;
    color: #0070A0;
    cursor: pointer;
    font-size: 12px;
    color: #0070A0;
    border: 2px solid #0070A0;

    &:hover,
    &:focus {
        box-shadow: 4px 2px 1px 1px #0070A0;
    }
`