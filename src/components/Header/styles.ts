import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.primary};
    border-width: 4px;
    border-color: ${props => props.theme.colors.secundary};
    padding: 10px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.onPrimary};
    font-size: 20px;
`;

export const Name = styled(Title)`
    font-size: 30px;
`;
