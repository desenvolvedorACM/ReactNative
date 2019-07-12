import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login  from '../components/login';
import Cadastro  from '../components/cadastro';
import Principal  from '../components/principal';


export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#B0C4DE' }} titleStyle={{ color: '#fff' }}>
        <Scene key="root">
            <Scene key="formLogin" component={Login} title="Login" hideNavBar={true} />
            <Scene key="formCadastro" component={Cadastro} title="Cadastro" hideNavBar={false} />
            <Scene key="boasVindas" component={Cadastro} title="" hideNavBar={true} />
            <Scene key="Principal" component={Principal} title="Principal" hideNavBar={true} />
        </Scene>
    </Router>
);
