import { Router, Scene, Actions } from 'react-native-router-flux';

import Login  from './components/login';
import Cadastro  from './components/cadastro';


export default props => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
            <Scene key="root">
                <Scene key="formLogin" component={Login} hideNavBar={true} />
                <Scene key="formCadastro" component={Cadastro} hideNavBar={true} />
            </Scene>
        </Router>
    );
}

;