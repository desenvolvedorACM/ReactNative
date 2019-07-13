import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../components/login';
import Cadastro from '../components/cadastro';
import Principal from '../components/principal';


export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#483D8B' }} titleStyle={{ color: '#fff' }}>
        <Scene key="root">
            <Scene key="formLogin" component={Login} title="Login" hideNavBar={true} />
            <Scene key="formCadastro" component={Cadastro} title="Cadastro de usuário" hideNavBar={false} />
            <Scene key="formPrincipal" component={Principal} title="Principal" hideNavBar={true} />
        </Scene>
    </Router>
);
