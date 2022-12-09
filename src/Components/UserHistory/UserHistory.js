import React from "react";
import * as S from './UserHistory.styled';
import HistoryList from "./HistoryList";

const UserHistory = () => {
    return (
        <S.Container>
            <S.TitleHeader>
                <S.Title>My History</S.Title>
            </S.TitleHeader>
            <HistoryList/>
        </S.Container>
    )
}

export default UserHistory;