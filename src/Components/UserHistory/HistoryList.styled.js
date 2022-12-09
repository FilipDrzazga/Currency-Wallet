import styled from 'styled-components';

const HistorySection = styled.section `
    width:100%;
    max-height:90%;
    overflow:hidden;
`
const HistoryListItems = styled.ul `
    width:100%;
    max-height:75vh;
    overflow-y:scroll;
    display:flex;
    flex-direction:column;
    flex-wrap:no-wrap;
    align-content:center;
    justify-content:space-between;
    list-style-type:none;
`

export { HistorySection, HistoryListItems };