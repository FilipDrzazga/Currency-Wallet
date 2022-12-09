import React from "react";
import * as S from './HistoryItem.styled';

import { useSelector } from 'react-redux';

const tableDataName = ['Currency value:', 'Purchase price:', 'Current rate:', 'Date of purchase:'];

const HistoryItem = () => {

    const walletState = useSelector(state => state.wallet.currencies);

    const percentageProfit = (price,rate) => {
        return (((rate-price)*100)/price).toFixed(2);
    }

    return (
        <>
            {walletState.map((item, id) => {
                const profit = percentageProfit(item.purchasePrice, item.rate);
               return <S.Item key={id}>
                    <S.TableItem>
                        <S.TableHeadItem>
                            <S.TableHeadRow>
                                {tableDataName.map((name, id) => (<S.TableHeadData key={id}>{name}</S.TableHeadData>))}
                            </S.TableHeadRow>
                        </S.TableHeadItem>
                        <S.TableBodyItem>
                            <S.TableBodyRow>
                               <S.TableBodyData>{item.currencyValue} {item.currencyCode}</S.TableBodyData>
                                <S.TableBodyData>{item.purchasePrice}</S.TableBodyData>
                               <S.TableBodyData>{item.rate}</S.TableBodyData>
                                <S.TableBodyData>{item.purchaseDate}</S.TableBodyData>
                            </S.TableBodyRow>
                        </S.TableBodyItem>
                    </S.TableItem>
                   <S.SpanItem isProfit={profit}>{profit}%</S.SpanItem>
                </S.Item>
            })}
        </>
    )
}

export default HistoryItem;