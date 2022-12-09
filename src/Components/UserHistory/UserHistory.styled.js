import styled from 'styled-components';


const Container = styled.section `
    width: 100%;
    min-height:100vh;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content:flex-start;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`
const TitleHeader = styled.header `
    width:100%;
    height:10%;
    margin-bottom:${({theme})=>theme.space[4]};
`
const Title = styled.h1 `
    color: ${({ theme }) => theme.colors.purple};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight:${({ theme }) => theme.fontWeight.semiBold};
`

export { Container, TitleHeader, Title };