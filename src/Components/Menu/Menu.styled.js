import styled, {css} from 'styled-components';

const Container = styled.section`
    position:absolute;
    bottom:1%;
    left:50%;
    transform: translateX(-50%);
    width:90%;
    height:9%;
    border-radius:20px;
    background-color:${({theme})=>theme.colors.yellow};
`
const Navigation = styled.nav`
    position:absolute;
    bottom:1%;
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
`
const setActive = css`
    &::after {
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            width: 45%;
            height: 80%;
            border-radius:12px;
            transform:translate(-50%, -50%);
            background-color: ${({theme})=>theme.colors.backgroundColor};
            z-index:-1;
        }
`
const Item = styled.li`
    position:relative;
    width:100%;
    height:100%;
    color:${({theme})=>theme.colors.purple};
    display:flex;
    justify-content:center;
    align-items:center;
    }
    ${({ id, activePage }) => id === activePage && setActive};
`

export { Container, Navigation, setActive, Item };