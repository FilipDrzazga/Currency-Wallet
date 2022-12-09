import styled from 'styled-components';

const Item = styled.li`
    position:relative;
    width:100%;
    height:10%;
    border-radius: 15px;
    margin-bottom:${({theme})=>theme.space[4]};
    background-color:${({ theme }) => theme.colors.white};
`
const TableItem = styled.table`
    width:100%;
    height:100%;
    padding:${({theme})=>theme.space[3]};
    text-align:center;
    font-size:${({theme})=>theme.fontSizes.xxs};
    font-weight:${({theme})=>theme.fontWeight.semiBold};
`
const TableHeadItem = styled.thead`
    color:${({theme})=>theme.colors.purple};
`
const TableHeadRow = styled.tr`
`
const TableHeadData = styled.th`
    font-weight:${({theme})=>theme.fontWeight.semiBold};
`
const TableBodyItem = styled.tbody`
    font-size:${({theme})=>theme.fontSizes.xxs};
    color:${({theme})=>theme.colors.purple};
`
const TableBodyRow = styled.tr `
`
const TableBodyData = styled.td `
`
const SpanItem = styled.span`
    position: absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%, 50%);
    padding:${({theme})=>theme.space[1]};
    font-size:${({theme})=>theme.fontSizes.xxs};
    border-radius: 15px;
    background-color:${({ isProfit, theme }) => {
        return Math.sign(isProfit) >= 0 ? theme.colors.green : theme.colors.red;
    }};
    color:${({theme})=>theme.colors.purple};
`

export { Item, TableItem, TableHeadItem, TableHeadRow, TableHeadData, TableBodyItem, TableBodyRow, TableBodyData, SpanItem };