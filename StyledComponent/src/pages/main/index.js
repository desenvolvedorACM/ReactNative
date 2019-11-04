import React, { Component } from 'react';
import { Container, Titulo, Botao, TituloBotao } from './styles';

console.disableYellowBox = true;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Titulo>Exemplo de styled component</Titulo>
                <Botao  cor='#4682B4' onPress={()=> { alert('Disparando clique...')}}>
                    <TituloBotao tamanho={18}>Clique aqui</TituloBotao>
                </Botao>
            </Container>
        );
    }
}

export default App;
