import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #809966;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Botao = styled.TouchableOpacity`
  border-radius: 12;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 55px;
  background-color: ${props => props.cor};
`;

export const Titulo = styled.Text`
  font-size: 25px;
  color: #FFF;
`;

export const TituloBotao = styled.Text`
  font-size: ${props => `${props.tamanho}px`};
  color: #FFF;
`;
