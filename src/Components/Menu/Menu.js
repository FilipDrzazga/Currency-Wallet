import React from "react";
import * as S from './Menu.styled';
import { icons, FontAwesomeIcon } from "../styled/shared";

const Menu = ({displayPage, activePage}) => {
    return (
        <S.Container>
            <S.Navigation>
                {icons.map((icon, id) => (
                    <S.Item key={id} id={id} activePage={activePage} onClick={() => displayPage(id)}>
                        <FontAwesomeIcon z-index={3} icon={icon} size='xl'/>
                    </S.Item>
                ))}
            </S.Navigation>
        </S.Container>
    )
}

export default Menu;