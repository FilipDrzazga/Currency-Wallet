import styled from 'styled-components';

const FormSection = styled.section `
    width:100%;
    height:90%;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-content:center;
`
const Form = styled.form `
    width:90%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-content:flex-start;
    gap: ${({theme})=>theme.space[3]};
`
const InputContainer = styled.div `
    width:100%;
    height:15%;
    display:flex;
    flex-direction:column;
    gap: ${({ theme }) => theme.space[1]};
`
const Label = styled.label `
    width:100%;
    padding-left: ${({ theme }) => theme.space[3]};
    color:${({theme})=> theme.colors.purple};
`
const Input = styled.input `
    width:100%;
    height:50%;
    padding-left:${({ theme }) => theme.space[3]};
    font-size:${({theme})=>theme.fontSizes.s};
    border-radius:30px;
    border:none;
    color:${({theme})=>theme.colors.purple};
    &::placeholder{
        color:${({theme})=>theme.colors.purple};
        opacity:0.5;
    }
`
const ErrorMessage = styled.span `
    padding-left:${({ theme }) => theme.space[3]};
    font-size:${({ theme }) => theme.fontSizes.xxs};
    color:${({theme})=>theme.colors.red};
`

export { FormSection, Form, InputContainer, Label, Input, ErrorMessage };