import styled from 'styled-components';

const Text = styled.h2`
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight:${({ theme }) => theme.fontWeight.normal};
`

export default Text;