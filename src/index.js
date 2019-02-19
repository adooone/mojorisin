import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    MuiThemeProvider,
    //
} from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './sass/main.sass';
// import reducer from './redux/reducer/reducer';
import { theme } from './theme/styles';
import App from './components/App';
import store from './redux/store/store';

const history = createBrowserHistory();
const render = (MyApp) => {
    ReactDOM.render(
        <Provider store={ store }>
            <MuiThemeProvider theme={ theme }>
                <Router history={ history }>
                    <MyApp />
                </Router>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

// const app = document.getElementById('root');
// ReactDOM.render(<App />, app);

// if (module.hot) {
//     module.hot.accept('./components/App', () => {
//         render(App);
//     });
// }
