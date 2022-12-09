import styled from 'styled-components';

const Button = styled.button`
    width:50%;
    height:${(props) => props.height}%;
    opacity:${({disabled})=>disabled && 0.5};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({theme})=>theme.colors.white};
`

export default Button;