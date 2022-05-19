import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.colors.background.main};
    margin: 20px;
    justify-content: space-between;
`;
