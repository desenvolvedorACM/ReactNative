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


export const ContainerAnimation = styled.View`
height: 50px;
width: 100%;
`;

export const TextVolume = styled.Text`
  color: #000;
  font-size: 15px;
  text-align: left;
  text-transform: uppercase;
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
  background-color: rgba(123,104,238,0.9);
  border-radius: 10px;
  margin-top: 12px;
  padding: 9px;
  align-items: center;
`;

export const TextHigh = styled.Text`
  color: #7b4173;
  font-size: 15px;
  font-weight: bold;
`;

export const TextLow = styled.Text`
  color: #de9ed6;
  font-size: 15px;
  font-weight: bold;
`;

export const TextDateNow = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const ContainerDatePicker = styled.View`
  flex-direction: row;
  padding: 4px;
  justify-content: space-around;
`;

export const TitleEmpresa = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;

export const TotalItems = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const ButtonView = styled.TouchableOpacity`
  width: 100%;
  background-color: #115588;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
`;

export const TitleButton = styled.Text`
  color: #FFF;
  font-size: 15px;
`;