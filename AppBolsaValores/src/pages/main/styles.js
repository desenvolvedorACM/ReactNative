import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  padding: 9px;
`;

export const PesquisarEmpresa = styled.TextInput`
   border-width: 1;
   border-color: #808080;
   border-radius: 8px; 
   width: 100%; 
   height: 40px;
`;

export const ContainerPicker = styled.View`
  height: 40px;
  flex-direction: row;
  border-radius: 10px;
  background: rgba(123,104,238, 0.4);
  margin-bottom: 12px;
`;

export const PickerEmpresa = styled.Picker`
   border-radius: 8px; 
   width: 100%; 
   height: 40px;
   color: #000;
`;


export const ContainerPesquisarEmpresa = styled.View`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 15px;
`;


export const ContainerList = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContainerInformation = styled.View`
  margin-bottom: 10px;
`;

export const TextInformation = styled.Text`
 font-size: 15px;
 font-weight: bold;
 margin-bottom: 10px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  border-radius: 12;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #114466;
  margin-top: 12px;
`;


export const TitleButtonFilter = styled.Text`
  font-size: ${props => `${props.tamanho}px`};
  color: #FFF;
`;

export const ContainerItemFlatList = styled.View`
  background-color: #f8f8f8;
  border-width: 1;
  border-color: #D3D3D3;
  border-radius: 5;
  padding: 20px;
  margin-bottom: 20px;
`;

export const projecButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #115588;
  border-radius: 10px;
  margin-top: 12px;
  padding: 9px;
  align-items: center;
`;

export const ContainerAnimation = styled.View`
height: 50px;
width: 100%;
`;

export const TextVolume = styled.Text`
  color: #000;
  font-size: 18px;
  text-align: left;
  font-weight: bold;
`;

export const ContainerVolume = styled.View`
  height: 20px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-top: 9px;
`;

export const TextViewGraphic = styled.Text`
  color: #FFF;
  font-size: 18px;
`;

export const ButtonViewGraphic = styled.TouchableOpacity`
  width: 100%;
  background-color: #115588;
  border-radius: 10px;
  margin-top: 12px;
  padding: 9px;
  align-items: center;
`;