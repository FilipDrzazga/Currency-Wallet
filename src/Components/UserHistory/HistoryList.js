import React from "react";
import * as S from './HistoryList.styled';
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
    return (
        <S.HistorySection>
            <S.HistoryListItems>
                <HistoryItem/>
            </S.HistoryListItems>
        </S.HistorySection>
    )
}

export default HistoryList;