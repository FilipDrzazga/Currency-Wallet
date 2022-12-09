import styled from 'styled-components';

const BalanceSection = styled.section `
    width:100%;
    height:30%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex-wrap: wrap;
    text-align:center;
`
const BalanceHeader = styled.header `
    width:100%;
    height:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const BalanceDiv = styled.div `
    width:100%;
    height:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const BalanceValue = styled.span `
    margin-top: ${({theme})=>theme.space[4]};
    color: ${({theme})=>theme.colors.purple};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight:${({ theme }) => theme.fontWeight.semiBold};
`

export { BalanceSection, BalanceHeader, BalanceDiv, BalanceValue };