import {BrowserRouter} from 'react-router-dom';
import Root from './router/Router';

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.getElementById('page')
)