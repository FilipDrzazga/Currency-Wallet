import styled from 'styled-components';

const Container = styled.section`
    width:100%;
    height:100vh;
    display: flex;
    flex-direction:column;
    flex-wrap: no-wrap;
    justify-content:flex-start;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`
const TitleHeader = styled.header`
    width:100%;
    height:10%;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:${({theme})=>theme.space[4]};
`
const Title = styled.h1`
    color: ${({ theme }) => theme.colors.purple};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight:${({ theme }) => theme.fontWeight.semiBold};
`
const CurrenciesListItems = styled.ul`
    width:100%;
    height:70vh;
    overflow:auto;
`
const CurrenciesItem = styled.li`
    width:100%;
    height:10%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 15px;
    margin-bottom:${({theme})=>theme.space[2]};
    background-color:${({ theme }) => theme.colors.white};
`

export { Container, TitleHeader, Title, CurrenciesListItems, CurrenciesItem };