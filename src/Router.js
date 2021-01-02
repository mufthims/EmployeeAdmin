import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path='/home' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )

}

export default Router;