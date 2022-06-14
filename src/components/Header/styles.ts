import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.primary.main};
    border-width: ${({theme}) => theme.borders.radius.xs}px;
    border-color: ${props => props.theme.colors.secundary.main};
    padding: ${({theme}) => theme.spacing.sm}px;
    border-radius: ${({theme}) => theme.borders.radius.xs}px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.primary.onMain};
    font-size: 20px;
`;

export const Name = styled(Title)`
    font-size: 30px;
`;
