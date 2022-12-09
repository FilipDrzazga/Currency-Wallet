import styled from 'styled-components';

const CurrenciesSection = styled.section `
    width:100%;
    height:45%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const CurrenciesHeader = styled.header `
    width:100%;
    height:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const CurrenciesChartContainer = styled.div `
    width:100%;
    height:70%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export { CurrenciesSection, CurrenciesHeader, CurrenciesChartContainer };